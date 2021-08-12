import { createSelector } from 'reselect';
import _ from 'lodash';

const selectData = state => state.data;

export const selectDataObj = createSelector([selectData], data => data.data);

export const selectCountriesData = createSelector(
  [selectData],
  data => data.countriesData
);

export const selectCountriesArr = createSelector(
  [selectCountriesData],
  countriesData =>
    !_.isEmpty(countriesData)
      ? Object.keys(countriesData).map(country => country)
      : []
);

export const selectCountryData = createSelector(
  [selectData],
  data => data.countryData
);

export const selectCountriesDataForPreview = createSelector(
  [selectCountriesData],
  countriesData => _.toArray(countriesData)
);

export const selectCountriesNameAndCoords = createSelector(
  [selectCountriesDataForPreview],
  countriesData =>
    countriesData.map(({ country, countryInfo: { lat, long } }) => ({
      country,
      coords: { lat, lng: long }
    }))
);

export const selectCountryDataFromCountriesData = country =>
  createSelector(
    [selectCountriesData],
    countriesData => countriesData[country]
  );

export const selectGraphData = createSelector(
  [selectData],
  data => data.graphData
);

export const selectIsFetched = createSelector(
  [selectData],
  data => data.isFetched
);

export const selectCoords = createSelector([selectData], data => data.coords);

export const selectZoom = createSelector([selectData], data => data.zoom);

export const selectCountry = createSelector([selectData], data => data.country);

export const selectCaseType = createSelector(
  [selectData],
  data => data.caseType
);
