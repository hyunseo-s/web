export interface Photo {
  id: string;
  /**
   * Can be a single image path string or an array of strings for a carousel.
   * Example: "/images/photos/img.jpg" OR ["/images/photos/img1.jpg", "/images/photos/img2.jpg"]
   */
  url: string | string[];
  /** Path to the image used in the grid view. */
  thumbnail: string;
  title: string;
  /** 
   * A single category string or an array of strings for multiple categories.
   * Example: "Nature" OR ["Nature", "Landscape"]
   */
  category: string | string[];
  description?: string;
}

export const photos: Photo[] = [
  {
    "id": "featured-carousel-1",
    "url": [
      "/images/photos/IMG_1622.jpg",
      "/images/photos/IMG_2449.jpg",
      "/images/photos/IMG_2572.jpg"
    ],
    "thumbnail": "/images/photos/IMG_1622.jpg",
    "title": "Cats and Dogs",
    "category": ["Seokgu", "Nim", "Milo"],
    "description": "Furries hehe"
  },
  {
    "id": "featured-carousel-2",
    "url": [
      "/images/photos/IMG_2810.jpg",
      "/images/photos/IMG_2859.jpg",
      "/images/photos/IMG_2874.jpg"
    ],
    "thumbnail": "/images/photos/IMG_2810.jpg",
    "title": "Cat's being stupid",
    "category": ["Nim", "Milo"],
    "description": "Why are they so stupid"
  },
  {
    "id": "1",
    "url": "/images/photos/54A64A44-364A-42BD-999B-AE76A78C6E10.jpg",
    "thumbnail": "/images/photos/54A64A44-364A-42BD-999B-AE76A78C6E10.jpg",
    "title": "Side eye",
    "category": "Theo"
  },
  {
    "id": "2",
    "url": "/images/photos/D6D0213F-DA2E-476B-B243-144ADE10EF41.jpg",
    "thumbnail": "/images/photos/D6D0213F-DA2E-476B-B243-144ADE10EF41.jpg",
    "title": "Hello there!",
    "category": "Theo"
  },
  {
    "id": "9",
    "url": "/images/photos/IMG_2937.jpg",
    "thumbnail": "/images/photos/IMG_2937.jpg",
    "title": "Quokka",
    "category": "Nature"
  },
  {
    "id": "10",
    "url": "/images/photos/IMG_2959.jpg",
    "thumbnail": "/images/photos/IMG_2959.jpg",
    "title": "Long neck",
    "category": "Nature"
  },
  {
    "id": "11",
    "url": "/images/photos/IMG_2968.jpg",
    "thumbnail": "/images/photos/IMG_2968.jpg",
    "title": "Ooga Booga",
    "category": "Nature"
  },
  {
    "id": "12",
    "url": "/images/photos/IMG_2993.jpg",
    "thumbnail": "/images/photos/IMG_2993.jpg",
    "title": "Prety boy",
    "category": "Theo"
  },
  {
    "id": "13",
    "url": "/images/photos/IMG_3056.jpg",
    "thumbnail": "/images/photos/IMG_3056.jpg",
    "title": "Warm cat",
    "category": "Nim"
  },
  {
    "id": "14",
    "url": "/images/photos/IMG_3060.jpg",
    "thumbnail": "/images/photos/IMG_3060.jpg",
    "title": "Moments before disaster",
    "category": ["Nim", "Milo"],
  },
  {
    "id": "15",
    "url": "/images/photos/IMG_3093.jpg",
    "thumbnail": "/images/photos/IMG_3093.jpg",
    "title": "Travels",
    "category": "Nim"
  },
  {
    "id": "16",
    "url": "/images/photos/att.EPXVq3UjKiL-8G2ZH1oUWsV4vKwdJpgNanpsU79qPDU.jpg",
    "thumbnail": "/images/photos/att.EPXVq3UjKiL-8G2ZH1oUWsV4vKwdJpgNanpsU79qPDU.jpg",
    "title": "Smiley boy",
    "category": "Theo"
  },
  {
    "id": "17",
    "url": "/images/photos/att.dfhucOSSarpfxZn1XeEW20kyupXd2-P5dlASpiZOv-Q.jpg",
    "thumbnail": "/images/photos/att.dfhucOSSarpfxZn1XeEW20kyupXd2-P5dlASpiZOv-Q.jpg",
    "title": "Happy birthday",
    "category": "Theo"
  },
  {
    "id": "18",
    "url": "/images/photos/att.fDmz4rVrK6rJHbhuzJGnX4q611WK3T80GOspRuvCEuQ.jpg",
    "thumbnail": "/images/photos/att.fDmz4rVrK6rJHbhuzJGnX4q611WK3T80GOspRuvCEuQ.jpg",
    "title": "Birthday gnome",
    "category": "Theo"
  }
];
