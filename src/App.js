import React, { useEffect } from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
import 'leaflet/dist/leaflet.css';

export default function App({
  fetchCountriesDataStart,
  fetchCountryDataStart,
  fetchGraphDataStart,
  country
}) {
  useEffect(() => {
    fetchCountriesDataStart();
    fetchCountryDataStart(country);
    fetchGraphDataStart(country);
  }, [
    fetchCountriesDataStart,
    fetchCountryDataStart,
    fetchGraphDataStart,
    country
  ]);

  return (
    <div className='app'>
      <MainContainer />
    </div>
  );
}
