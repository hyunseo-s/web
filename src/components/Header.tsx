import React from 'react';

interface HeaderProps {
  onAboutClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAboutClick }) => {
  return (
    <header>
      <h1>Justin's Collection</h1>
      <nav>
        <ul>
          <li><button className="active">Collection</button></li>
          <li><button onClick={onAboutClick}>About</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
