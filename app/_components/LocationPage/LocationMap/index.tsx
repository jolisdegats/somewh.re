'use client';

import dynamic from 'next/dynamic';

// Define props interface with color customization options
interface LocationMapProps {
  coordinates: { latitude: number; longitude: number };
  mapStyle?: 'default' | 'dark' | 'light' | 'satellite';
  markerColor?: 'red' | 'blue' | 'green' | 'orange' | 'yellow' | 'violet' | 'grey' | 'black';
  popupClassName?: string;
  zoom?: number;
  height?: string;
  country: string;
}

// Dynamically import the Map component with no SSR
const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false,
  loading: () => (
    <div className="bg-slate-100 animate-pulse" style={{ height: '400px', width: '100%' }}></div>
  ),
});

const LocationMap = (props: LocationMapProps) => {
  return <DynamicMap {...props} />;
};

export default LocationMap;
