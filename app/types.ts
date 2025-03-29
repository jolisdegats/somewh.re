export interface Location {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  country: string;
  region: string;
  mainImage: {
    url: string;
    imagePosition?: string;
  };
  instagramTag?: string;
  bestTimeToVisit: string[];
  averageTemp: string;
  accessibilityLevel: 'easy' | 'intermediate' | 'challenging';
  type: ('nature' | 'architecture' | 'cultural' | 'historical')[];
  religions: string[];
  date: Date;
  details?: {
    category: string;
    description: string;
    image: string;
    imagePosition?: string;
  }[];
}

export const SAMPLE_LOCATIONS: Location[] = [
  {
    id: '1',
    date: new Date('2025-03-29'),
    name: 'Socotra Island',
    description:
      'Often called the most alien-looking place on Earth, Socotra is home to plants and trees found nowhere else on the planet. The iconic Dragon Blood Trees and bottle-shaped Desert Roses create an otherworldly landscape that seems straight out of a science fiction movie.',
    shortDescription: 'An isolated island with unique and ancient plant species',
    coordinates: {
      latitude: 12.5,
      longitude: 53.8333,
    },
    country: 'Yemen',
    region: 'Arabian Sea',

    mainImage: {
      url: 'https://images.unsplash.com/photo-1642425150068-422fef94a8ea',
    },
    instagramTag: 'socotra',
    bestTimeToVisit: ['October', 'November', 'December', 'January'],
    averageTemp: '25°C to 30°C',
    accessibilityLevel: 'challenging',
    type: ['nature'],
    religions: ['Islam', 'Christianity'],
    details: [
      {
        category: 'Biodiversity',
        description:
          "Socotra is home to over 700 endemic species, many of which exist nowhere else on Earth. The island's isolation has allowed evolution to take a unique path, resulting in surreal flora like the Dragon Blood Tree, with its crimson resin and umbrella-like canopy, and the swollen Desert Rose. These species thrive in microclimates created by the island’s rugged terrain and monsoon winds.",
        image:
          'https://magazine.hortus-focus.fr/wp-content/uploads/sites/2/2018/10/adenium-obesum-rose-du-desert-zanskar.jpg',
        imagePosition: 'object-[50%_70%]',
      },

      // {
      //   category: 'Geology',
      //   description:
      //     "Socotra lies on its own continental fragment, separated from mainland Africa and the Arabian Peninsula millions of years ago. Its dramatic limestone plateaus, karst caves, and coastal cliffs are shaped by ancient tectonic activity and erosion. These geological features create isolated habitats and contribute to the island's surreal landscape.",
      //   image: 'https://images.unsplash.com/photo-1642425146609-6c8ff4589d18',
      // },
      // {
      //   category: 'Culture',
      //   description:
      //     'The people of Socotra, known as the Soqotri, speak a unique unwritten language and maintain a traditional way of life rooted in fishing, herding, and date cultivation. Oral storytelling, poetry, and herbal medicine are important parts of the island’s cultural heritage, shaped by centuries of isolation and adaptation to a harsh environment.',
      //   image: 'https://images.unsplash.com/photo-1642425145481-d59fbcfde153',
      // },
      {
        category: 'Language',
        description:
          'The indigenous people of Socotra speak Soqotri, a unique and ancient Semitic language that exists nowhere else on Earth. Traditionally, Soqotri was solely an oral language, rich in poetry and storytelling. Efforts are underway to develop a written script to document its vast oral literature and ensure its preservation for future generations.',
        image: 'https://images.unsplash.com/photo-1642425145481-d59fbcfde153',
        imagePosition: 'object-[100%_30%]',
      },
    ],
    // 'https://images.unsplash.com/photo-1642425149790-6067ff132526',
    // 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Dragon%27s_Blood_Tree%2C_Socotra_Is_%2812473612124%29.jpg/1600px-Dragon%27s_Blood_Tree%2C_Socotra_Is_%2812473612124%29.jpg?20140603062846',
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Wadi%2C_Socotra_Island_%2810941888296%29.jpg/1600px-Wadi%2C_Socotra_Island_%2810941888296%29.jpg',
  },
  {
    id: '2',
    name: 'Zhangjiajie Glass Bridge',
    description:
      'Suspended 300 meters above the canyon floor, this architectural marvel stretches across the Grand Canyon of Zhangjiajie. The transparent glass walkway offers breathtaking views of the surrounding landscape that inspired the floating mountains in Avatar.',
    shortDescription: "The world's longest and highest glass-bottomed bridge",
    coordinates: {
      latitude: 29.1667,
      longitude: 110.5333,
    },
    country: 'China',
    region: 'Hunan',
    mainImage: {
      url: 'https://images.unsplash.com/photo-1549883839-c22d9d06e131',
    },
    instagramTag: 'zhangjiajieglassbridge',
    bestTimeToVisit: ['April', 'May', 'September', 'October'],
    averageTemp: '20°C to 25°C',
    accessibilityLevel: 'intermediate',
    type: ['architecture', 'nature'],
    religions: ['Buddhism', 'Taoism'],
    details: [
      {
        category: 'Architecture',
        description: 'The bridge is a marvel of engineering and design',
        image: 'https://images.unsplash.com/photo-1549883839-c22d9d06e131',
      },
    ],
  },
];
