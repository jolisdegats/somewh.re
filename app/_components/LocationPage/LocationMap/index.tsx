'use client';
import { Layer, Map, Marker, Source } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css'; // See notes below
import { useState } from 'react';
import mapStyle from '../../../../public/mapstyle.json';
import { StyleSpecification } from 'maplibre-gl';
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
  return (
    <div className="flex justify-between items-center gap-2">
      <div></div>
      <div className="w-[500px] h-[500px] relative flex flex-col items-center justify-center">
        <span className="font-display text-4xl font-bold px-6 bg-white">N</span>
        <span className="border-l-2 border-black h-6 w-1 mb-2" />
        <div className="flex items-center justify-center w-[360px] h-[360px] bg-[#0E172B] circle-clip relative">
          <div
            className="w-[340px] h-[340px] circle-clip relative"
            onMouseEnter={() => setCountryLayerOpacity(0.5)}
            onMouseLeave={() => setCountryLayerOpacity(0)}
          >
            <Map
              attributionControl={false}
              maplibreLogo={false}
              minZoom={1.5}
              initialViewState={{
                longitude,
                latitude,
                zoom: 1.5,
              }}
              style={{ width: 340, height: 340 }}
              mapStyle={mapStyle as StyleSpecification}
              onMoveEnd={map => {
                console.log(map.target?.getBearing());
              }}
              onLoad={map => {
                map.target?.setProjection({
                  type: 'globe',
                });
              }}
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
        <p className="font-medium text-gray-600 mt-4 select-all">
          <span className="font-display text-slate-900 text-lg font-bold">N</span>{' '}
          {latitude.toFixed(4)}
          °, <span className="font-display text-slate-900 text-lg font-bold">E</span>{' '}
          {longitude.toFixed(4)}°
        </p>
      </div>
    </div>
  );
}
