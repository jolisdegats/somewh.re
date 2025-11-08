import { Location } from '../types';

export const NorwaySvalbard: Location = {
  slug: 'norway-svalbard',
  audio: '/audio/Svalbard.wav',
  name: 'Svalbard',
  description:
    "An Arctic archipelago located halfway between mainland Norway and the North Pole, Svalbard is a land of extremes. With polar bears outnumbering humans, 24-hour darkness in winter and midnight sun in summer, this remote territory offers a glimpse into one of the planet's last true wildernesses. The Svalbard Global Seed Vault, buried deep in permafrost, safeguards the world's agricultural heritage.",
  shortDescription: 'Arctic archipelago where polar bears outnumber humans',
  coordinates: {
    latitude: 78.2232,
    longitude: 15.6267,
  },
  country: 'Norway',
  continent: 'Europe',
  currency: 'Norwegian Krone (NOK)',
  region: 'Svalbard',
  mainImage: {
    credit: {
      name: 'Arian Zwegers',
      url: 'https://commons.wikimedia.org/wiki/File:Longyearbyen,_Svalbard.jpg',
    },
    url: 'https://cdn.pixabay.com/photo/2016/02/09/19/57/christmas-background-1190254_1280.jpg',
    imagePosition: 'object-[50%_50%]',
  },
  instagramTag: 'svalbard',
  bestTimeToVisit: ['March', 'April', 'May', 'June', 'July', 'August', 'September'],
  averageTemp: '-16°C to 6°C',
  accessibilityLevel: 'intermediate',
  type: ['nature'],
  religions: ['Christianity'],
  languages: ['Norwegian', 'Russian'],
  keyDates: [
    {
      year: 2008,
      title: 'Global Seed Vault Opens',
      description:
        "The Svalbard Global Seed Vault opens, designed to preserve the world's crop diversity in case of global catastrophe.",
    },
    {
      year: 1920,
      title: 'Svalbard Treaty',
      description:
        'The Svalbard Treaty grants Norway sovereignty while allowing all signatory nations equal rights to economic activities on the archipelago.',
    },
    {
      year: 1906,
      title: 'Coal Mining Begins',
      description:
        'American entrepreneur John Munro Longyear establishes the first commercial coal mine, founding what would become Longyearbyen.',
    },
    {
      year: 1596,
      title: 'European Discovery',
      description:
        'Dutch explorer Willem Barentsz discovers the archipelago while searching for the Northeast Passage, naming it Spitsbergen.',
    },
  ],
  details: [
    {
      category: 'Wildlife',
      description:
        'Svalbard is home to approximately 3,000 polar bears, outnumbering the human population. The archipelago also hosts Arctic foxes, Svalbard reindeer, and numerous seabird colonies. The surrounding waters are rich with marine life including whales, seals, and walruses. Visitors must carry firearms for protection against polar bears when venturing outside settlements, and all travel requires careful planning and respect for the harsh Arctic environment.',
      image: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Polar_bear_%28Ursus%29_maritimus_female_with_its_cub%2C_Svalbard_%282%29.jpg',
        imagePosition: 'object-[50%_70%]',
        credit: {
          name: 'Unsplash',
          url: 'https://unsplash.com/photos/arctic-wildlife',
        },
      },
    },
    {
      category: 'Climate',
      description:
        'Svalbard experiences extreme seasonal variations. The polar night lasts from late October to mid-February, with complete darkness, while the midnight sun shines from late April to late August. Permafrost extends hundreds of meters deep, and glaciers cover 60% of the landmass. Despite its latitude, the archipelago is warmer than other areas at similar latitudes due to the warming effect of the Gulf Stream, though temperatures still rarely exceed 10°C even in summer.',
      image: {
        url: 'https://images.pexels.com/photos/19968770/pexels-photo-19968770.jpeg',
        imagePosition: 'object-[50%_50%]',
        credit: {
          name: 'Unsplash',
          url: 'https://unsplash.com/photos/arctic-landscape',
        },
      },
    },
  ],
  gallery: [
    {
      url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
      imagePosition: 'object-[50%_50%]',
      credit: {
        name: 'Unsplash',
        url: 'https://unsplash.com/photos/svalbard-nature',
      },
    },
    {
      url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd',
      imagePosition: 'object-[50%_50%]',
      credit: {
        name: 'Unsplash',
        url: 'https://unsplash.com/photos/arctic-svalbard',
      },
    },
  ],
};
