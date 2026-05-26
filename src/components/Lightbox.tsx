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

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

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
  }, [onClose, isCarousel, currentIndex, images.length]);

  if (!photo) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>&times;</button>
      
      {isCarousel && (
        <>
          <button 
            className={`nav-btn prev ${currentIndex === 0 ? 'disabled' : ''}`} 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            disabled={currentIndex === 0}
          >
            &#10094;
          </button>
          <button 
            className={`nav-btn next ${currentIndex === images.length - 1 ? 'disabled' : ''}`} 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            disabled={currentIndex === images.length - 1}
          >
            &#10095;
          </button>
        </>
      )}

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex]} alt={`${photo.title} ${currentIndex + 1}`} />
        
        {isCarousel && (
          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === currentIndex ? ' active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        )}

        <div className="lightbox-info">
          <h3>{photo.title}</h3>
          {photo.description && <p>{photo.description}</p>}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
