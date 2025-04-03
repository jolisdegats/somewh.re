import React from 'react';
import LocationMain from '@/app/_components/LocationPageContent/LocationMain';
import LocationDetails from '@/app/_components/LocationPageContent/LocationDetails';
import LocationAccessibility from '@/app/_components/LocationPageContent/LocationAccessibility';
import LocationMap from '@/app/_components/LocationPageContent/LocationMap';
import StickyLocationName from '@/app/_components/LocationPageContent/StickyLocationName';
import Pagination from '@/app/_components/LocationPageContent/LocationPagination';
import LocationGallery from '@/app/_components/LocationPageContent/LocationGallery';
import LocationCredits from '@/app/_components/LocationPageContent/LocationCredits';
import LocationKeyDates from '@/app/_components/LocationPageContent/LocationKeyDates';
import { getLocationBySlugOrLatest } from './_utils';

export interface LocationPageParams {
  slug: string;
}

const LocationPage = async ({ params }: { params: Promise<LocationPageParams> }) => {
  const { slug } = await params;
  console.log('LocationPage', slug[0]);
  const location = getLocationBySlugOrLatest(slug[0]);

  console.log('LocationPage', location);
  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <div className="grid gap-x-20">
      <Pagination id={location.id} />
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
      {/* <div>
        <small className="text-gray-500 uppercase tracking-wider mb-1">
          Coordinates
        </small>
        <p className="font-medium text-gray-600">
          {coordinates.latitude.toFixed(4)}°, {coordinates.longitude.toFixed(4)}°
        </p>
      </div> */}
      {/* <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-gray-400" />
              <span>{location.bestTimeToVisit.join(', ')}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-gray-400" />
              <span>{location.country}</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass size={18} className="text-gray-400" />
              <span className="capitalize">{location.difficulty}</span>
            </div>
          </div> */}
      <div className="relative h-full grid grid-cols-12 justify-start pt-24 gap-16">
        <div className="col-span-2 relative">
          <StickyLocationName locationName={location.name} />
        </div>

        <div className="col-span-8 justify-start gap-16">
          {/* DETAILS */}
          <LocationDetails locationDetails={location.details} locationName={location.name} />
          {/* OTHER DETAILS */}
          {/* <LocationAccessibility
            bestTimeToVisit={location.bestTimeToVisit}
            averageTemp={location.averageTemp}
            languages={location.languages}
            religions={location.religions}
          /> */}
          <div className="grid grid-cols-12">
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
        <div className="col-span-2 relative" />
      </div>

      {!!location.gallery?.length && (
        <LocationGallery gallery={location.gallery} locationName={location.name} />
      )}
      <LocationCredits location={location} />
    </div>
  );
};

export default LocationPage;
