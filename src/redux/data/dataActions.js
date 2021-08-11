import {
  FETCH_COUNTRIES_START,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRY_DATA_START,
  FETCH_COUNTRY_DATA_SUCCESS,
  FETCH_COUNTRY_DATA_FAILURE,
  FETCH_COUNTRIES_DATA_START,
  FETCH_COUNTRIES_DATA_SUCCESS,
  FETCH_COUNTRIES_DATA_FAILURE,
  FETCH_GRAPH_DATA_START,
  FETCH_GRAPH_DATA_SUCCESS,
  FETCH_GRAPH_DATA_FAILURE,
  SET_COUNTRY,
  SET_COORDINATES,
  SET_ZOOM,
  SET_CASE_TYPE
} from './dataActionTypes';

export const fetchCountriesStart = () => ({
  type: FETCH_COUNTRIES_START
});

export const fetchCountriesSuccess = countriesArr => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countriesArr
});

export const fetchCountriesFailure = errMsg => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: errMsg
});

export const fetchCountryDataStart = country => ({
  type: FETCH_COUNTRY_DATA_START,
  payload: country
});

export const fetchCountryDataSuccess = countryObj => ({
  type: FETCH_COUNTRY_DATA_SUCCESS,
  payload: countryObj
});

export const fetchCountryDataFailure = errMsg => ({
  type: FETCH_COUNTRY_DATA_FAILURE,
  payload: errMsg
});

export const fetchCountriesDataStart = () => ({
  type: FETCH_COUNTRIES_DATA_START
});

export const fetchCountriesDataSuccess = countryObj => ({
  type: FETCH_COUNTRIES_DATA_SUCCESS,
  payload: countryObj
});

export const fetchCountriesDataFailure = countryObj => ({
  type: FETCH_COUNTRIES_DATA_FAILURE,
  payload: countryObj
});

export const setCountry = country => ({ type: SET_COUNTRY, payload: country });

export const fetchGraphDataStart = country => ({
  type: FETCH_GRAPH_DATA_START,
  payload: country
});

export const fetchGraphDataSuccess = countryData => ({
  type: FETCH_GRAPH_DATA_SUCCESS,
  payload: countryData
});

export const fetchGraphDataFailure = errMsg => ({
  type: FETCH_GRAPH_DATA_FAILURE,
  payload: errMsg
});

export const setCoordinates = coords => ({
  type: SET_COORDINATES,
  payload: coords
});

export const setZoom = zoom => ({
  type: SET_ZOOM,
  payload: zoom
});

export const setCaseType = caseType => ({
  type: SET_CASE_TYPE,
  payload: caseType
});
