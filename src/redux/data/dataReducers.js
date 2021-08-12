import {
  FETCH_COUNTRY_DATA_START,
  FETCH_COUNTRY_DATA_SUCCESS,
  FETCH_COUNTRY_DATA_FAILURE,
  FETCH_COUNTRIES_DATA_START,
  FETCH_COUNTRIES_DATA_SUCCESS,
  FETCH_COUNTRIES_DATA_FAILURE,
  FETCH_GRAPH_DATA_SUCCESS,
  FETCH_GRAPH_DATA_FAILURE,
  SET_COUNTRY,
  SET_COORDINATES,
  SET_ZOOM,
  SET_CASE_TYPE
} from './dataActionTypes';

const INITIAL_STATE = {
  country: '',
  countryData: {},
  countriesData: null,
  coords: { lat: 0, lng: 0 },
  zoom: 3,
  caseType: 'cases',
  isFetched: false,
  graphData: {},
  errMsg: ''
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_DATA_START:
    case FETCH_COUNTRY_DATA_START:
      return { ...state, isFetched: false };
    case FETCH_COUNTRY_DATA_SUCCESS:
      return { ...state, isFetched: true, countryData: action.payload };
    case FETCH_COUNTRIES_DATA_SUCCESS:
      return { ...state, isFetched: true, countriesData: action.payload };
    case FETCH_GRAPH_DATA_SUCCESS:
      return { ...state, isFetched: true, graphData: action.payload };
    case SET_COUNTRY:
      return { ...state, country: action.payload };
    case SET_COORDINATES:
      return { ...state, coords: action.payload };
    case SET_ZOOM:
      return { ...state, zoom: action.payload };
    case SET_CASE_TYPE:
      return { ...state, caseType: action.payload };
    case FETCH_COUNTRY_DATA_FAILURE:
    case FETCH_COUNTRIES_DATA_FAILURE:
    case FETCH_GRAPH_DATA_FAILURE:
      return {
        ...state,
        isFetched: false,
        errMessage: action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;
