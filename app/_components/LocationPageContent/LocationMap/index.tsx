'use client';
import { Layer, Map, MapRef, Marker, Source } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import mapStyle from '@/public/mapstyle.json';
import { StyleSpecification } from 'maplibre-gl';
import { useIsVisible } from '@/app/_hooks/useIsVisible';
import Button from '@/app/_components/Library/Button';

const mapSize = 340;
const mapSizeWithPadding = mapSize + 14;

export default function LocationMap({
  latitude,
  longitude,
  geojson,
}: {
  latitude: number;
  longitude: number;
  geojson?: GeoJSON.FeatureCollection;
}) {
  const [countryLayerOpacity, setCountryLayerOpacity] = useState(0);
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
      flyToLocation({ map: map.current, speed: 0.2 });
    }
  }, [isVisible, flyToLocation]);

  return (
    <div className="col-span-4 pr-18">
      <div className="relative flex flex-col items-center justify-center">
        <span className="font-display text-4xl font-bold px-6 bg-white">N</span>
        <span className="border-l-2 border-black h-6 w-1 mb-2" />
        <div
          style={{
            width: `${mapSizeWithPadding}px`,
            height: `${mapSizeWithPadding}px`,
          }}
          className={`flex items-center justify-center bg-[#0E172B] circle-clip relative`}
        >
          <div
            ref={mapContainer}
            style={{
              width: `${mapSize}px`,
              height: `${mapSize}px`,
            }}
            className={`circle-clip relative`}
            onMouseEnter={() => setCountryLayerOpacity(0.5)}
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
              mapStyle={mapStyle as StyleSpecification}
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
                      'fill-color': '#0E172B',
                      'fill-opacity': countryLayerOpacity,
                      'fill-outline-color': '#9CA2A7',
                    }}
                  />
                </Source>
              )}
              <Marker latitude={latitude} longitude={longitude}>
                <div className="bg-[#0E172B] w-2 h-2 rounded-full" />
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
          className="font-medium text-gray-600 mt-4 enabled:hover:opacity-50"
        >
          <span className="font-display text-slate-900 text-lg font-bold">N</span>{' '}
          {latitude.toFixed(4)}
          °, <span className="font-display text-slate-900 text-lg font-bold">E</span>{' '}
          {longitude.toFixed(4)}°
        </Button>
      </div>
    </div>
  );
}
