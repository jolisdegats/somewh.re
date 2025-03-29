import React from 'react';
// import { MapPin, Calendar, Compass } from 'lucide-react';
import { Location } from '@/app/types';
import StickyLocationName from '@/app/_components/LocationPage/StickyLocationName';
import LocationDetails from '@/app/_components/LocationPage/LocationDetails';
import LocationAccessibility from '@/app/_components/LocationPage/LocationAccessibility';
import LocationMain from '@/app/_components/LocationPage/LocationMain';
import LocationMap from '@/app/_components/LocationPage/LocationMap';

interface LocationPageProps {
  location: Location;
}

export const LocationPage: React.FC<LocationPageProps> = ({ location }) => {
  return (
    <div className="grid gap-x-20">
      <LocationMain
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
      <div className="relative h-full grid grid-cols-12 justify-start py-24 gap-16">
        <div className="col-span-2 relative">
          <StickyLocationName locationName={location.name} />
        </div>

        <div className="col-span-8 justify-start gap-16">
          {/* DETAILS */}
          <LocationDetails locationDetails={location.details} locationName={location.name} />
          {/* OTHER DETAILS */}
          <LocationAccessibility
            bestTimeToVisit={location.bestTimeToVisit}
            averageTemp={location.averageTemp}
            accessibilityLevel={location.accessibilityLevel}
            religions={location.religions}
          />
          <LocationMap coordinates={location.coordinates} country={location.country} />
        </div>

        <div className="col-span-2 relative" />
      </div>
    </div>
  );
};
