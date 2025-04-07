import React from 'react';
import LocationMain from '@/app/_components/LocationPageContent/LocationMain';
import LocationDetails from '@/app/_components/LocationPageContent/LocationDetails';
import LocationAccessibility from '@/app/_components/LocationPageContent/LocationAccessibility';
import LocationMap from '@/app/_components/LocationPageContent/LocationMap';
import StickyLocationName from '@/app/_components/LocationPageContent/StickyLocationName';
// import Pagination from '@/app/_components/LocationPageContent/LocationPagination';
import LocationGallery from '@/app/_components/LocationPageContent/LocationGallery';
import LocationCredits from '@/app/_components/LocationPageContent/LocationCredits';
import LocationKeyDates from '@/app/_components/LocationPageContent/LocationKeyDates';
import { getLocationBySlugOrLatest } from './_utils';

export interface LocationPageParams {
  slug: string;
}

const LocationPage = async ({ params }: { params: Promise<LocationPageParams> }) => {
  const { slug } = await params;
  const location = getLocationBySlugOrLatest(slug[0]);

  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <div className="grid gap-x-4 md:gap-x-20">
      <LocationMain
        continent={location.continent}
        date={location.date}
        type={location.type}
        name={location.name}
        country={location.country}
        region={location.region}
        description={location.description}
        mainImageUrl={location.mainImage.url}
        mainImagePosition={location.mainImage.imagePosition}
      />

      <div className="relative grid grid-cols-6 lg:grid-cols-12 justify-start pt-12 md:pt-24 gap-8 lg:gap-16">
        <div className="col-span-1 lg:block lg:col-span-2 relative">
          <StickyLocationName locationName={location.name} />
        </div>

        <div className="col-span-5 lg:col-span-8 justify-start gap-8 lg:gap-16 pl-2 pr-6 lg:pl-0 lg:pr-0">
          <LocationDetails locationDetails={location.details} locationName={location.name} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <LocationKeyDates keyDates={location.keyDates} />
            <LocationMap
              geojson={location.geojson}
              latitude={location.coordinates.latitude}
              longitude={location.coordinates.longitude}
            />
          </div>
          <LocationAccessibility
            averageTemp={location.averageTemp}
            currency={location.currency}
            languages={location.languages}
            religions={location.religions}
          />
        </div>
        <div className="hidden lg:block lg:col-span-2 relative" />
      </div>

      {!!location.gallery?.length && (
        <LocationGallery gallery={location.gallery} locationName={location.name} />
      )}
      <LocationCredits location={location} />
    </div>
  );
};

export default LocationPage;
