import React from 'react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>About Me</h2>
        <p>
          Hi, I'm Justin. Welcome to my website
        </p>
        <p style={{ marginTop: '1rem' }}>
          :)
        </p>
      </div>
    </div>
  );
};

export default AboutModal;
