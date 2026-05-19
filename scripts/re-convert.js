import path from 'path';
import fs from 'fs/promises';
import heicConvert from 'heic-convert';
import sharp from 'sharp';

const WATCH_DIR = 'public/images/photos';

const convertFiles = async () => {
  console.log(`Starting clean conversion in ${WATCH_DIR}...`);
  const files = await fs.readdir(WATCH_DIR);
  
  for (const file of files) {
    const originalExt = path.extname(file);
    const ext = originalExt.toLowerCase();
    const fileName = path.basename(file, originalExt);
    const filePath = path.join(WATCH_DIR, file);
    const targetPath = path.join(WATCH_DIR, `${fileName}.jpg`);

    if (ext === '.heic' || ext === '.png' || ext === '.webp') {
      try {
        console.log(`Processing: ${file}...`);
        const inputBuffer = await fs.readFile(filePath);
        let outputBuffer;

        if (ext === '.heic') {
          outputBuffer = await heicConvert({
            buffer: inputBuffer,
            format: 'JPEG',
            quality: 0.9
          });
        } else {
          outputBuffer = await sharp(inputBuffer)
            .jpeg({ quality: 90 })
            .toBuffer();
        }

        await fs.writeFile(targetPath, outputBuffer);
        // We keep the original for now just in case, or you can delete it
        console.log(`✅ Converted ${file} to ${path.basename(targetPath)}`);
      } catch (error) {
        console.error(`❌ Failed to convert ${file}:`, error.message);
      }
    }
  }
  console.log('Conversion process finished.');
};

convertFiles();
