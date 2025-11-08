import LayoutWithHeader from '@/app/_components/Layout/LayoutWithHeader';
import { getLocationBySlugOrDayOfYear } from './_utils';
import { LocationPageParams } from './page';
import LocationHeader from '@/app/_components/LocationPageContent/LocationHeader';

const LocationLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<LocationPageParams>;
}) => {
  const { slug } = await params;
  const location = getLocationBySlugOrDayOfYear(slug?.[0]);
  if (!location) {
    return <div>Location not found</div>;
  }
  return (
    <LayoutWithHeader headerChildren={<LocationHeader location={location} />}>
      {children}
    </LayoutWithHeader>
  );
};

export default LocationLayout;
