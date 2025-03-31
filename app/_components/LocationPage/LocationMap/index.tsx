import * as React from 'react';
import { Layer, LayerProps, Map, MapRef, Marker, Source, useMap } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css'; // See notes below
import { dataLayer } from './map-style';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import mapStyle from '../../../../public/mapstyle.json';
import { MapLibreEvent, StyleSpecification } from 'maplibre-gl';

const dataLayer: LayerProps = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': '#3288bd',
    'fill-opacity': 0.8,
  },
};

const setLayersOpacity = (map: MapLibreEvent, opacity: number) => {
  map.target
    ?.getStyle()
    .layers.filter(layer => layer.id !== 'data')
    .map(layer => {
      if (layer.type === 'symbol') {
        map.target?.setPaintProperty(layer.id, `icon-opacity`, opacity);
        map.target?.setPaintProperty(layer.id, `text-opacity`, opacity);
      } else {
        map.target?.setPaintProperty(layer.id, `${layer.type}-opacity`, opacity);
      }
    });
};

export default function LocationMap({
  latitude,
  longitude,
  geojson,
}: {
  latitude: number;
  longitude: number;
  geojson?: GeoJSON.FeatureCollection;
}) {
  const [map, setMap] = useState<MapLibreEvent | null>(null);
  return (
    <div className="flex justify-between items-center gap-2">
      <p className="font-medium text-gray-600">
        {latitude.toFixed(4)}°, {longitude.toFixed(4)}°
      </p>
      <button
        onClick={() => {
          setLayersOpacity(map?.target, 1);
        }}
      >
        Click here
      </button>

      <Map
        attributionControl={false}
        maplibreLogo={false}
        initialViewState={{
          longitude,
          latitude,
          zoom: 3,
        }}
        style={{ width: 500, height: 500 }}
        mapStyle={mapStyle as StyleSpecification}
        onLoad={map => {
          setMap(map);
          setLayersOpacity(map, 0);
        }}
      >
        {geojson && (
          <Source type="geojson" data={geojson}>
            <Layer {...dataLayer} />
          </Source>
        )}
        <Marker latitude={latitude} longitude={longitude}>
          <div className="bg-black w-2 h-2 rounded-full" />
        </Marker>
      </Map>
    </div>
  );
}
