import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="category-filter">
      <button 
        className={activeCategory === 'All' ? 'active' : ''} 
        onClick={() => onCategoryChange('All')}
      >
        All
      </button>
      {categories.map(category => (
        <button 
          key={category}
          className={activeCategory === category ? 'active' : ''}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
