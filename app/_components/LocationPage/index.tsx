import React, { useRef, useEffect, useState } from 'react';
// import { MapPin, Calendar, Compass } from 'lucide-react';
import { Location } from '@/app/types';

interface LocationPageProps {
  location: Location;
}

export const LocationPage: React.FC<LocationPageProps> = ({ location }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current && titleRef.current) {
      setLineHeight(containerRef.current?.offsetHeight - titleRef.current?.offsetHeight);
      console.log(containerRef.current?.offsetHeight - titleRef.current?.offsetHeight);
    }
  }, [containerRef.current, titleRef.current]);

  return (
    <div className="grid gap-x-20">
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-6 p-16 flex flex-col justify-end">
          <div className="max-w-2xl">
            <div className="space-y-2 mb-8">
              <div className="text-sm uppercase tracking-wider text-gray-500">
                {location.type.join(' • ')}
              </div>
              <h1 className="font-display text-8xl">{location.name}</h1>
            </div>

            <div className="grid grid-cols-3 gap-8 mb-12 text-sm">
              <div>
                <p className="text-gray-500 uppercase tracking-wider mb-1">Country</p>
                <p className="font-medium">{location.country}</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase tracking-wider mb-1">Region</p>
                <p className="font-medium">{location.region}</p>
              </div>
              <div>
                <p className="text-gray-500 uppercase tracking-wider mb-1">Coordinates</p>
                <p className="font-medium">
                  {location.coordinates.latitude.toFixed(4)}°,{' '}
                  {location.coordinates.longitude.toFixed(4)}°
                </p>
              </div>
            </div>

            <p className="text-xl leading-relaxed text-gray-600 mb-12">{location.description}</p>
          </div>
        </div>
        <div className="col-span-6 relative">
          <img
            src={location.mainImage}
            alt={location.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

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
      <div
        ref={containerRef}
        className="relative mb-24 min-h-screen grid grid-cols-12 justify-start pt-24 gap-16"
      >
        <div className="col-span-2 relative">
          <div className="sticky top-0 left-0 h-screen flex flex-col translate-x-24">
            <div className="relative h-full">
              <div className="absolute left-0 top-0">
                <div className="[writing-mode:sideways-lr] whitespace-nowrap flex items-center h-full">
                  {lineHeight && <div className="w-[1px] h-full bg-black mt-6" />}
                  <div ref={titleRef} className="flex items-center">
                    <h2 className="font-display text-black text-6xl font-bold">{location.name}</h2>
                    <div className="w-[1px] h-[30px] bg-black mb-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-8 justify-start gap-16">
          {/* DETAILS */}
          {location.details?.map((detail, index) => (
            <div key={detail.category} className="col-span-10 grid grid-cols-12 gap-16 m-x-16">
              <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} col-span-6 relative`}>
                <div className="grid grid-cols-1 gap-4 relative">
                  {detail.image && (
                    <div className="h-[250px] w-full overflow-hidden">
                      <img
                        src={detail.image}
                        alt={`${location.name} ${detail.category} 1`}
                        className={`w-full h-full object-cover ${detail.imagePosition ?? 'object-center'}`}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} col-span-6 relative`}>
                <h2 className="font-display text-4xl font-black tracking-wider mb-6 mt-4">
                  {detail.category}
                </h2>
                <p className="text-gray-600">{detail.description}</p>
              </div>
            </div>
          ))}
          {/* OTHER DETAILS */}
          <div className="pt-36 pb-24 gap-16 text-center">
            <div className="grid grid-cols-4 gap-16 border-y border-gray-200 py-8">
              <div className="col-span-1 relative">
                <h2 className="font-display text-2xl font-black tracking-wider mb-6 mt-4">
                  Best time to visit
                </h2>
                <p className="text-gray-600 uppercase">{location.bestTimeToVisit.join(', ')}</p>
              </div>
              <div className="col-span-1 relative">
                <h2 className="font-display text-2xl font-black tracking-wider mb-6 mt-4">
                  Average weather
                </h2>
                <p className="text-gray-600 uppercase">{location.averageTemp}</p>
              </div>
              <div className="col-span-1 relative">
                <h2 className="font-display text-2xl font-black tracking-wider mb-6 mt-4">
                  Accessibility
                </h2>
                <p className="text-gray-600 uppercase">{location.accessibilityLevel}</p>
              </div>
              <div className="col-span-1 relative">
                <h2 className="font-display text-2xl font-black tracking-wider mb-6 mt-4">
                  Religions
                </h2>
                <p className="text-gray-600 uppercase">{location.religions.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 relative" />
      </div>
    </div>
  );
};
