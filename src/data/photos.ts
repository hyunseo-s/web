export interface Photo {
  id: string;
  url: string | string[]; // Can be a single string or an array of strings
  thumbnail: string;
  title: string;
  category: string;
  description?: string;
}

export const photos: Photo[] = [
  // Example of a multi-image "Instagram style" post
  {
    id: 'carousel-1',
    url: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
    title: 'Nature Collection',
    category: 'Nature',
    description: 'A collection of my favorite nature shots.'
  },
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
    title: 'Misty Mountains',
    category: 'Nature',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
    title: 'Sunlight through Trees',
    category: 'Nature',
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
    thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80',
    title: 'City Street',
    category: 'Urban',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b',
    thumbnail: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=600&q=80',
    title: 'Skylines',
    category: 'Urban',
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    title: 'Portrait One',
    category: 'Portrait',
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04',
    thumbnail: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80',
    title: 'Portrait Two',
    category: 'Portrait',
  },
];
