'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { LatLngBoundsExpression } from 'leaflet';

// Country bounds component to fit the map to country borders
const CountryBounds = ({
  country,
  coordinates,
}: {
  country: string;
  coordinates: { latitude: number; longitude: number };
}) => {
  const map = useMap();

  useEffect(() => {
    // Common country bounding boxes (rough approximations)
    const countryBounds: Record<string, LatLngBoundsExpression> = {
      USA: [
        [24.396308, -125.0],
        [49.384358, -66.93457],
      ],
      France: [
        [41.315985, -5.559082],
        [51.089062, 9.560547],
      ],
      Japan: [
        [30.601389, 128.644531],
        [45.39845, 146.162109],
      ],
      Australia: [
        [-43.834527, 113.291016],
        [-10.833306, 153.984375],
      ],
      Thailand: [
        [5.615986, 97.382813],
        [20.632784, 105.996094],
      ],
      Yemen: [
        [12.21118, 41.616211],
        [19.228177, 54.404297],
      ],
      // Add more countries as needed
    };

    // Default bounds if country not found
    const defaultBounds: LatLngBoundsExpression = [
      [coordinates.latitude - 2, coordinates.longitude - 2],
      [coordinates.latitude + 2, coordinates.longitude + 2],
    ];

    // Find the bounds for the country or use default
    const bounds = countryBounds[country] || defaultBounds;

    // Set a timeout to allow the map to initialize first
    setTimeout(() => {
      map.fitBounds(bounds);
    }, 100);
  }, [map, country]);

  return null;
};

interface DynamicMapProps {
  coordinates: { latitude: number; longitude: number };
  country: string; // Add country prop
  mapStyle?: 'default' | 'dark' | 'light' | 'satellite';
  markerColor?: 'red' | 'blue' | 'green' | 'orange' | 'yellow' | 'violet' | 'grey' | 'black';
  popupClassName?: string;
  zoom?: number;
  height?: string;
}

const DynamicMap = ({
  coordinates,
  country,
  mapStyle = 'default',
  markerColor = 'blue',
  popupClassName = '',
  zoom = 13,
  height = '400px',
}: DynamicMapProps) => {
  // Map style configurations
  const mapStyles = {
    default: {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        // '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        '',
    },
    dark: {
      url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    },
    light: {
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    },
    satellite: {
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    },
  };

  return (
    <div style={{ height, width: '100%' }}>
      <MapContainer
        center={[coordinates.latitude, coordinates.longitude]}
        zoom={zoom}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: '100%', width: '100%' }}
      >
        <CountryBounds country={country} coordinates={coordinates} />
        <TileLayer attribution={mapStyles[mapStyle].attribution} url={mapStyles[mapStyle].url} />
        <Marker position={[coordinates.latitude, coordinates.longitude]}>
          <Popup className={popupClassName}>
            <div className="text-center">
              <h3 className="font-semibold mb-1">Location</h3>
              <p>
                {coordinates.latitude.toFixed(4)}, {coordinates.longitude.toFixed(4)}
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default DynamicMap;
