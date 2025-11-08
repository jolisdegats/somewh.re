import { SAMPLE_LOCATIONS } from '@/app/data';
import { getDayOfYear } from '@/app/_utils/getDayOfYear';
import { Location } from '@/app/types';

type LocationWithId = Location & { id: string };

export const getLocationBySlugOrLatest = (slug: string): LocationWithId | undefined => {
  return (
    SAMPLE_LOCATIONS.find(location => location.slug === slug) ||
    SAMPLE_LOCATIONS[SAMPLE_LOCATIONS.length - 1]
  );
};

export const getLocationBySlugOrDayOfYear = (
  slug: string | undefined
): LocationWithId | undefined => {
  if (slug) {
    return getLocationBySlugOrLatest(slug);
  }
  // If no slug, use day of year (homepage case)
  const dayOfYear = getDayOfYear(new Date());
  return SAMPLE_LOCATIONS.find(location => location.id === String(dayOfYear));
};
