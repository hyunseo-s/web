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
          {Array.isArray(photo.url) && photo.url.length > 1 && (
            <svg className="multi-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="6" width="14" height="14" rx="2" stroke="white" strokeWidth="2" />
              <path d="M7 6V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2" stroke="white" strokeWidth="2" />
            </svg>
          )}
          <div className="photo-overlay">
            <span>{photo.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
