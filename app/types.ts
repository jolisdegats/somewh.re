interface Image {
  url: string;
  imagePosition: string;
  credit: {
    name: string;
    url: string;
  };
}
export interface Location {
  accessibilityLevel: 'easy' | 'intermediate' | 'challenging';
  averageTemp: string;
  bestTimeToVisit: string[];
  continent: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  country: string;
  currency: string;
  description: string;
  details?: {
    category: string;
    description: string;
    image: Image;
  }[];
  gallery?: Image[];
  geojson?: GeoJSON.FeatureCollection;
  instagramTag?: string;
  keyDates: {
    description?: string;
    title: string;
    year: number;
  }[];
  languages: string[];
  mainImage: Image;
  name: string;
  audio: string;
  region: string;
  religions: string[];
  shortDescription: string;
  slug: string;
  type: ('nature' | 'architecture' | 'cultural' | 'historical')[];
}
