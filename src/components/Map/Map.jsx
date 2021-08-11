import React, { useEffect } from 'react';
import './Map.css';
import _ from 'lodash';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import MapDataContainer from '../../containers/MapDataContainer';

export default function Map({
  center,
  zoom,
  countryCoords,
  setCoordinates,
  setZoom
}) {
  useEffect(() => {
    if (!_.isEmpty(countryCoords)) {
      setCoordinates(countryCoords);
      setZoom(3);
    }
  }, [setCoordinates, countryCoords, setZoom]);

  return (
    <div className='mapContainer'>
      {!_.isEmpty(center) ? (
        <LeafletMap center={center} zoom={zoom}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            transparent
          />
          <MapDataContainer />
        </LeafletMap>
      ) : null}
    </div>
  );
}
