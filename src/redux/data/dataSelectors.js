import { createSelector } from 'reselect';
import _ from 'lodash';

const selectData = state => state.data;

export const selectDataObj = createSelector([selectData], data => data.data);

export const selectCountries = createSelector(
  [selectData],
  data => data.countries
);

export const selectCountryData = createSelector(
  [selectData],
  data => data.countryData
);

export const selectCountryCoords = createSelector(
  [selectCountryData],
  countryData =>
    !_.isEmpty(countryData?.countryInfo)
      ? {
          lat: countryData.countryInfo.lat,
          lng: countryData.countryInfo.long
        }
      : null
);

export const selectCountriesData = createSelector(
  [selectData],
  data => data.countriesData
);

export const selectCountriesDataForPreview = createSelector(
  [selectCountriesData],
  countriesData => _.toArray(countriesData)
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
