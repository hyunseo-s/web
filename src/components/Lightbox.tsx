import React, { useEffect, useState } from 'react';
import type { Photo } from '../data/photos';

interface LightboxProps {
  photo: Photo | null;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ photo, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when a new photo is opened
  useEffect(() => {
    setCurrentIndex(0);
  }, [photo]);

  const images = photo ? (Array.isArray(photo.url) ? photo.url : [photo.url]) : [];
  const isCarousel = images.length > 1;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (isCarousel) {
        if (event.key === 'ArrowRight') nextImage();
        if (event.key === 'ArrowLeft') prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isCarousel, currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!photo) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>&times;</button>
      
      {isCarousel && (
        <>
          <button className="nav-btn prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#10094;</button>
          <button className="nav-btn next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#10095;</button>
        </>
      )}

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex]} alt={`${photo.title} ${currentIndex + 1}`} />
        
        <div className="lightbox-info">
          <h3>{photo.title}</h3>
          {isCarousel && (
            <p className="carousel-counter">{currentIndex + 1} / {images.length}</p>
          )}
          {photo.description && <p>{photo.description}</p>}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
