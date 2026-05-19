import chokidar from 'chokidar';
import path from 'path';
import fs from 'fs/promises';
import heicConvert from 'heic-convert';
import sharp from 'sharp';

const WATCH_DIR = 'public/images/photos';

console.log(`Watching for new images in ${WATCH_DIR}...`);

const convertFile = async (filePath) => {
  const originalExt = path.extname(filePath);
  const ext = originalExt.toLowerCase();
  const fileName = path.basename(filePath, originalExt);
  const dir = path.dirname(filePath);
  
  const targetPath = path.join(dir, `${fileName}.jpg`);

  try {
    if (ext === '.heic') {
      console.log(`Converting ${filePath} to JPG...`);
      const inputBuffer = await fs.readFile(filePath);
      const outputBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 0.9
      });
      await fs.writeFile(targetPath, outputBuffer);
      await fs.unlink(filePath);
      console.log(`Successfully converted ${filePath} to ${targetPath}`);
    } else if (ext === '.png' || ext === '.webp') {
      console.log(`Converting ${filePath} to JPG...`);
      await sharp(filePath)
        .jpeg({ quality: 90 })
        .toFile(targetPath);
      await fs.unlink(filePath);
      console.log(`Successfully converted ${filePath} to ${targetPath}`);
    }
  } catch (error) {
    console.error(`Failed to convert ${filePath}:`, error.message);
  }
};

const watcher = chokidar.watch(WATCH_DIR, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});

watcher.on('add', (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.heic' || ext === '.png' || ext === '.webp') {
    convertFile(filePath);
  }
});

// Scan existing files on startup
const scanExisting = async () => {
  const files = await fs.readdir(WATCH_DIR);
  for (const file of files) {
    const filePath = path.join(WATCH_DIR, file);
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.heic' || ext === '.png' || ext === '.webp') {
      await convertFile(filePath);
    }
  }
};

scanExisting();
