import React, { useEffect } from 'react';
import type { Photo } from '../data/photos';

interface LightboxProps {
  photo: Photo | null;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ photo, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!photo) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>&times;</button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={photo.url} alt={photo.title} />
        <div className="lightbox-info">
          <h3>{photo.title}</h3>
          {photo.description && <p>{photo.description}</p>}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
