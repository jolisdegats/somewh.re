import React from 'react';
// import { MapPin, Calendar, Compass } from 'lucide-react';
import { Location } from '@/app/types';
import StickyLocationName from './StickyLocationName';
import LocationDetails from './LocationDetails';
import LocationAccessibility from './LocationAccessibility';
import LocationMain from './LocationMain';

interface LocationPageProps {
  location: Location;
}

export const LocationPage: React.FC<LocationPageProps> = ({ location }) => {
  return (
    <div className="grid gap-x-20">
      <LocationMain
        type={location.type}
        name={location.name}
        country={location.country}
        region={location.region}
        coordinates={location.coordinates}
        description={location.description}
        mainImageUrl={location.mainImage.url}
        mainImagePosition={location.mainImage.imagePosition}
      />
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
      <div className="relative mb-24 min-h-screen grid grid-cols-12 justify-start pt-24 gap-16">
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
        </div>

        <div className="col-span-2 relative" />
      </div>
    </div>
  );
};
