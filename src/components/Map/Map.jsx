import React from 'react';
import './Map.css';
import _ from 'lodash';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import MapDataContainer from '../../containers/MapDataContainer';

export default function Map({ coords, zoom }) {
  return (
    <div className='mapContainer'>
      {!_.isEmpty(coords) ? (
        <LeafletMap center={coords} zoom={zoom}>
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
