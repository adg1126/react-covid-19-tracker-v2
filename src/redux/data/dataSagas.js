import { takeLatest, put, all, select } from 'redux-saga/effects';
import _ from 'lodash';
import {
  FETCH_COUNTRIES_DATA_START,
  FETCH_COUNTRY_DATA_START,
  FETCH_GRAPH_DATA_START
} from './dataActionTypes';
import {
  fetchCountryDataSuccess,
  fetchCountryDataFailure,
  fetchCountriesDataSuccess,
  fetchCountriesDataFailure,
  fetchGraphDataSuccess,
  fetchGraphDataFailure
} from './dataActions';
import { selectCountryDataFromCountriesData } from './dataSelectors';

const url = 'https://disease.sh/v3/covid-19';

function* fetchCountriesDataAsync() {
  try {
    const res = yield fetch(`${url}/countries`);
    const data = yield res.json();

    yield put(fetchCountriesDataSuccess(_.mapKeys(data, 'country')));
  } catch (err) {
    yield put(fetchCountriesDataFailure(err.message));
  }
}

function* fetchCountriesDataStart() {
  yield takeLatest(FETCH_COUNTRIES_DATA_START, fetchCountriesDataAsync);
}

function* fetchCountryDataAsync({ payload: country }) {
  try {
    if (country.length) {
      const countryData = yield select(
        selectCountryDataFromCountriesData(country)
      );

      yield put(fetchCountryDataSuccess(countryData));
    } else {
      const newUrl = `${url}/all`;
      const res = yield fetch(newUrl);
      const {
        cases,
        active,
        deaths,
        recovered,
        todayCases,
        todayDeaths,
        todayRecovered,
        tests,
        population,
        updated
      } = yield res.json();

      yield put(
        fetchCountryDataSuccess({
          cases,
          active,
          deaths,
          recovered,
          todayCases,
          todayDeaths,
          todayRecovered,
          tests,
          population,
          updated
        })
      );
    }
  } catch (err) {
    yield put(fetchCountryDataFailure(err.message));
  }
}

function* fetchCountryDataStart() {
  yield takeLatest(FETCH_COUNTRY_DATA_START, fetchCountryDataAsync);
}

function* fetchGraphDataAsync({ payload: country }) {
  try {
    if (country.length) {
      const newUrl = `${url}/historical/${country}`;
      const res = yield fetch(newUrl);
      const {
        timeline: { cases, deaths, recovered }
      } = yield res.json();
      yield put(fetchGraphDataSuccess({ cases, deaths, recovered }));
    } else {
      const newUrl = `${url}/historical/all`;
      const res = yield fetch(newUrl);
      const { cases, deaths, recovered } = yield res.json();
      yield put(fetchGraphDataSuccess({ cases, deaths, recovered }));
    }
  } catch (err) {
    yield put(fetchGraphDataFailure(err.message));
  }
}

function* fetchGraphDataStart() {
  yield takeLatest(FETCH_GRAPH_DATA_START, fetchGraphDataAsync);
}

export function* dataSagas() {
  yield all([
    fetchCountriesDataStart(),
    fetchCountryDataStart(),
    fetchGraphDataStart()
  ]);
}
