export interface Photo {
  id: string;
  url: string | string[];
  thumbnail: string;
  title: string;
  category: string | string[];
  description?: string;
}

export const photos: Photo[] = [
  {
    "id": "demo-carousel",
    "url": [
      "/images/photos/54A64A44-364A-42BD-999B-AE76A78C6E10.jpg",
      "/images/photos/D6D0213F-DA2E-476B-B243-144ADE10EF41.jpg",
      "/images/photos/IMG_1622.jpg"
    ],
    "thumbnail": "/images/photos/54A64A44-364A-42BD-999B-AE76A78C6E10.jpg",
    "title": "Demo Multi-Image Post",
    "category": ["Theo", "Nim"],
    "description": "This is a demo post with multiple images and categories."
  },
  {
    "id": "demo-carousel-2",
    "url": [
      "/images/photos/IMG_2572.jpg",
      "/images/photos/IMG_2810.jpg",
      "/images/photos/IMG_2859.jpg"
    ],
    "thumbnail": "/images/photos/IMG_2572.jpg",
    "title": "Another Carousel Demo",
    "category": ["Featured", "Travel"],
    "description": "A second demo showing off the smooth carousel transition in the lightbox."
  },
  {
    "id": "1",
    "url": "/images/photos/54A64A44-364A-42BD-999B-AE76A78C6E10.jpg",
    "thumbnail": "/images/photos/54A64A44-364A-42BD-999B-AE76A78C6E10.jpg",
    "title": "Side Eye",
    "category": "Theo"
  },
  {
    "id": "2",
    "url": "/images/photos/D6D0213F-DA2E-476B-B243-144ADE10EF41.jpg",
    "thumbnail": "/images/photos/D6D0213F-DA2E-476B-B243-144ADE10EF41.jpg",
    "title": "Death Stare",
    "category": "Theo"
  },
  {
    "id": "3",
    "url": "/images/photos/IMG_1622.jpg",
    "thumbnail": "/images/photos/IMG_1622.jpg",
    "title": "Happy Boy",
    "category": "Seokgu"
  },
  {
    "id": "4",
    "url": "/images/photos/IMG_2449.jpg",
    "thumbnail": "/images/photos/IMG_2449.jpg",
    "title": "Stupid Cat & Flowers",
    "category": "Nim"
  },
  {
    "id": "5",
    "url": "/images/photos/IMG_2572.jpg",
    "thumbnail": "/images/photos/IMG_2572.jpg",
    "title": "Fluffy Cat",
    "category": "Milo"
  },
  {
    "id": "6",
    "url": "/images/photos/IMG_2810.jpg",
    "thumbnail": "/images/photos/IMG_2810.jpg",
    "title": "Cat in Lego",
    "category": "Nim"
  },
  {
    "id": "7",
    "url": "/images/photos/IMG_2859.jpg",
    "thumbnail": "/images/photos/IMG_2859.jpg",
    "title": "On the ledge",
    "category": "Milo"
  },
  {
    "id": "8",
    "url": "/images/photos/IMG_2874.jpg",
    "thumbnail": "/images/photos/IMG_2874.jpg",
    "title": "Lonely Quokka",
    "category": "Nature"
  },
  {
    "id": "9",
    "url": "/images/photos/IMG_2937.jpg",
    "thumbnail": "/images/photos/IMG_2937.jpg",
    "title": "KatsEye Giraffe",
    "category": "Nature"
  },
  {
    "id": "10",
    "url": "/images/photos/IMG_2959.jpg",
    "thumbnail": "/images/photos/IMG_2959.jpg",
    "title": "Cold Monkey",
    "category": "Nature"
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
