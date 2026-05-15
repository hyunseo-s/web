import { useState, useMemo } from 'react';
import './index.css';
import './App.css';
import { photos } from './data/photos';
import type { Photo } from './data/photos';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import PhotoGrid from './components/PhotoGrid';
import Lightbox from './components/Lightbox';
import AboutModal from './components/AboutModal';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const categories = useMemo(() => {
    const cats = new Set(photos.map(p => p.category));
    return Array.from(cats);
  }, []);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'All') return photos;
    return photos.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="container">
      <Header onAboutClick={() => setIsAboutOpen(true)} />
      
      <main>
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        <PhotoGrid 
          photos={filteredPhotos} 
          onPhotoClick={setSelectedPhoto} 
        />
      </main>

      <Lightbox 
        photo={selectedPhoto} 
        onClose={() => setSelectedPhoto(null)} 
      />

      <AboutModal 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
      />
      
      <footer style={{ marginTop: '5rem', paddingBottom: '2rem', textAlign: 'center', color: '#888', fontSize: '0.8rem' }}>
        &copy; {new Date().getFullYear()} Justin Son. Built with React.
      </footer>
    </div>
  );
}

export default App;
