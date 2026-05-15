import React from 'react';

interface HeaderProps {
  onAboutClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAboutClick }) => {
  return (
    <header>
      <h1>Hyunseo Son</h1>
      <nav>
        <ul>
          <li><button className="active">Work</button></li>
          <li><button onClick={onAboutClick}>About</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
