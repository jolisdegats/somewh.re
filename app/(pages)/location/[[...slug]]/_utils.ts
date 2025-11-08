import { SAMPLE_LOCATIONS } from '@/app/data';

export const getLocationBySlugOrLatest = (slug: string) => {
  return (
    SAMPLE_LOCATIONS.find(location => location.slug === slug) ||
    SAMPLE_LOCATIONS[SAMPLE_LOCATIONS.length - 1]
  );
};
