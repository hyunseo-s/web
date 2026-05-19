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
    "title": "Summer Collection",
    "category": ["Featured", "Nature", "Summer"],
    "description": "A collection of shots from the peak of summer, showcasing both nature and featured moments."
  },
  {
    "id": "featured-carousel-2",
    "url": [
      "/images/photos/IMG_2810.jpg",
      "/images/photos/IMG_2859.jpg",
      "/images/photos/IMG_2874.jpg"
    ],
    "thumbnail": "/images/photos/IMG_2810.jpg",
    "title": "Urban Series",
    "category": ["Featured", "Urban", "Series"],
    "description": "A multi-part series exploring urban textures and street life."
  },
  {
    "id": "1",
    "url": "/images/photos/54A64A44-364A-42BD-999B-AE76A78C6E10.jpg",
    "thumbnail": "/images/photos/54A64A44-364A-42BD-999B-AE76A78C6E10.jpg",
    "title": "Photo 1",
    "category": "Misc"
  },
  {
    "id": "2",
    "url": "/images/photos/D6D0213F-DA2E-476B-B243-144ADE10EF41.jpg",
    "thumbnail": "/images/photos/D6D0213F-DA2E-476B-B243-144ADE10EF41.jpg",
    "title": "Photo 2",
    "category": "Misc"
  },
  {
    "id": "3",
    "url": "/images/photos/IMG_1622.jpg",
    "thumbnail": "/images/photos/IMG_1622.jpg",
    "title": "Photo 3",
    "category": "Misc"
  },
  {
    "id": "4",
    "url": "/images/photos/IMG_2449.jpg",
    "thumbnail": "/images/photos/IMG_2449.jpg",
    "title": "Photo 4",
    "category": "Misc"
  },
  {
    "id": "5",
    "url": "/images/photos/IMG_2572.jpg",
    "thumbnail": "/images/photos/IMG_2572.jpg",
    "title": "Photo 5",
    "category": "Misc"
  },
  {
    "id": "6",
    "url": "/images/photos/IMG_2810.jpg",
    "thumbnail": "/images/photos/IMG_2810.jpg",
    "title": "Photo 6",
    "category": "Misc"
  },
  {
    "id": "7",
    "url": "/images/photos/IMG_2859.jpg",
    "thumbnail": "/images/photos/IMG_2859.jpg",
    "title": "Photo 7",
    "category": "Misc"
  },
  {
    "id": "8",
    "url": "/images/photos/IMG_2874.jpg",
    "thumbnail": "/images/photos/IMG_2874.jpg",
    "title": "Photo 8",
    "category": "Misc"
  },
  {
    "id": "9",
    "url": "/images/photos/IMG_2937.jpg",
    "thumbnail": "/images/photos/IMG_2937.jpg",
    "title": "Photo 9",
    "category": "Misc"
  },
  {
    "id": "10",
    "url": "/images/photos/IMG_2959.jpg",
    "thumbnail": "/images/photos/IMG_2959.jpg",
    "title": "Photo 10",
    "category": "Misc"
  },
  {
    "id": "11",
    "url": "/images/photos/IMG_2968.jpg",
    "thumbnail": "/images/photos/IMG_2968.jpg",
    "title": "Photo 11",
    "category": "Misc"
  },
  {
    "id": "12",
    "url": "/images/photos/IMG_2993.jpg",
    "thumbnail": "/images/photos/IMG_2993.jpg",
    "title": "Photo 12",
    "category": "Misc"
  },
  {
    "id": "13",
    "url": "/images/photos/IMG_3056.jpg",
    "thumbnail": "/images/photos/IMG_3056.jpg",
    "title": "Photo 13",
    "category": "Misc"
  },
  {
    "id": "14",
    "url": "/images/photos/IMG_3060.jpg",
    "thumbnail": "/images/photos/IMG_3060.jpg",
    "title": "Photo 14",
    "category": "Misc"
  },
  {
    "id": "15",
    "url": "/images/photos/IMG_3093.jpg",
    "thumbnail": "/images/photos/IMG_3093.jpg",
    "title": "Photo 15",
    "category": "Misc"
  },
  {
    "id": "16",
    "url": "/images/photos/att.EPXVq3UjKiL-8G2ZH1oUWsV4vKwdJpgNanpsU79qPDU.jpg",
    "thumbnail": "/images/photos/att.EPXVq3UjKiL-8G2ZH1oUWsV4vKwdJpgNanpsU79qPDU.jpg",
    "title": "Photo 16",
    "category": "Misc"
  },
  {
    "id": "17",
    "url": "/images/photos/att.dfhucOSSarpfxZn1XeEW20kyupXd2-P5dlASpiZOv-Q.jpg",
    "thumbnail": "/images/photos/att.dfhucOSSarpfxZn1XeEW20kyupXd2-P5dlASpiZOv-Q.jpg",
    "title": "Photo 17",
    "category": "Misc"
  },
  {
    "id": "18",
    "url": "/images/photos/att.fDmz4rVrK6rJHbhuzJGnX4q611WK3T80GOspRuvCEuQ.jpg",
    "thumbnail": "/images/photos/att.fDmz4rVrK6rJHbhuzJGnX4q611WK3T80GOspRuvCEuQ.jpg",
    "title": "Photo 18",
    "category": "Misc"
  }
];
