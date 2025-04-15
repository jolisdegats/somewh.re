'use client';
import { Layer, Map, MapRef, Marker, Source } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import mapStyle from '@/public/mapstyle.json';
import mapStyleDark from '@/public/mapstyle-dark.json';
import { StyleSpecification } from 'maplibre-gl';
import { useIsVisible } from '@/app/_hooks/useIsVisible';
import Button from '@/app/_components/Library/Button';
import useIsDarkMode from '@/app/_hooks/useIsDarkMode';
import useIsDesktop from '@/app/_hooks/useIsDesktop';

export default function LocationMap({
  latitude,
  longitude,
  geojson,
}: {
  latitude: number;
  longitude: number;
  geojson?: GeoJSON.FeatureCollection;
}) {
  const isDesktop = useIsDesktop();
  const mapSize = isDesktop ? 340 : 240;
  const mapSizeWithPadding = mapSize + 14;
  const isDarkMode = useIsDarkMode();
  const [countryLayerOpacity, setCountryLayerOpacity] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout>(null);
  const [locationCoords, setLocationCoords] = useState({
    lat: latitude,
    lng: longitude,
  });
  const map = useRef<MapRef>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(mapContainer);

  const flyToLocation = useCallback(
    ({ map, speed = 0.2 }: { map: MapRef | null; speed?: number }) => {
      if (map) {
        return map.flyTo({ center: [longitude, latitude], zoom: 1.5, speed });
      }
    },
    [longitude, latitude]
  );

  useEffect(() => {
    if (map.current && isVisible) {
      setIsScrolling(true);
      flyToLocation({ map: map.current, speed: 0.2 });
      setIsScrolling(false);
    }
  }, [isVisible, flyToLocation]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <div className="col-span-1 lg:col-span-6 lg:pl-18 ">
      <div className="relative flex flex-col items-center justify-center">
        <span className="font-display text-4xl font-bold px-6">N</span>
        <span className="border-l-2 border-black dark:border-gray-200 h-6 w-1 mb-2" />
        <div
          style={{
            pointerEvents: isScrolling ? 'none' : 'auto',
            width: `${mapSizeWithPadding}px`,
            height: `${mapSizeWithPadding}px`,
          }}
          className={`flex items-center justify-center bg-[#0E172B] dark:bg-gray-200 circle-clip relative`}
        >
          <div
            ref={mapContainer}
            style={{
              width: `${mapSize}px`,
              height: `${mapSize}px`,
            }}
            className={`circle-clip relative`}
            onMouseEnter={() => !isScrolling && setCountryLayerOpacity(0.5)}
            onMouseLeave={() => setCountryLayerOpacity(0)}
          >
            <Map
              onMoveEnd={map => {
                setLocationCoords({
                  lat: map.target.getCenter()?.lat ?? 0,
                  lng: map.target.getCenter()?.lng ?? 0,
                });
              }}
              ref={map}
              projection="globe"
              attributionControl={false}
              maplibreLogo={false}
              minZoom={1.5}
              initialViewState={{
                longitude: 2.333333,
                latitude: 48.866667,
                zoom: 1.5,
              }}
              style={{ width: mapSize, height: mapSize }}
              mapStyle={
                isDarkMode ? (mapStyleDark as StyleSpecification) : (mapStyle as StyleSpecification)
              }
            >
              {geojson && (
                <Source type="geojson" data={geojson}>
                  <Layer
                    id="data"
                    type="fill"
                    beforeId="place_country"
                    layout={{
                      visibility: 'visible',
                      'fill-sort-key': ['get', 'rank'],
                    }}
                    paint={{
                      'fill-color': isDarkMode ? '#9CA2A7' : '#0E172B',
                      'fill-opacity': countryLayerOpacity,
                      'fill-outline-color': isDarkMode ? '#0E172B' : '#9CA2A7',
                    }}
                  />
                </Source>
              )}
              <Marker latitude={latitude} longitude={longitude}>
                <div className="bg-[#0E172B] dark:bg-white w-2 h-2 rounded-full" />
              </Marker>
            </Map>
          </div>
        </div>
        <Button
          disabled={
            locationCoords.lat.toFixed(4) === latitude.toFixed(4) &&
            locationCoords.lng.toFixed(4) === longitude.toFixed(4)
          }
          onClick={() => {
            flyToLocation({ map: map.current, speed: 0.5 });
          }}
          className="font-medium text-gray-600 dark:text-white mt-4 enabled:hover:opacity-50"
        >
          <span className="font-display text-slate-900 dark:text-white text-lg font-bold">N</span>{' '}
          {latitude.toFixed(4)}
          °,{' '}
          <span className="font-display text-slate-900 dark:text-white text-lg font-bold">
            E
          </span>{' '}
          {longitude.toFixed(4)}°
        </Button>
      </div>
    </div>
  );
}
