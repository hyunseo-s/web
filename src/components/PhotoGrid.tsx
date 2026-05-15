import React from 'react';
import type { Photo } from '../data/photos';

interface PhotoGridProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, onPhotoClick }) => {
  return (
    <div className="photo-grid">
      {photos.map(photo => (
        <div 
          key={photo.id} 
          className="photo-item" 
          onClick={() => onPhotoClick(photo)}
        >
          <img src={photo.thumbnail} alt={photo.title} loading="lazy" />
          <div className="photo-overlay">
            <span>{photo.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
