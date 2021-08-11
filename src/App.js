import React, { useEffect } from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
import 'leaflet/dist/leaflet.css';

export default function App({
  fetchCountryDataStart,
  fetchCountriesDataStart,
  fetchCountriesStart,
  fetchGraphDataStart,
  country
}) {
  useEffect(() => {
    fetchCountriesDataStart();
    fetchCountriesStart();
    fetchCountryDataStart(country);
    fetchGraphDataStart(country);
  }, [
    fetchCountriesDataStart,
    fetchCountriesStart,
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
