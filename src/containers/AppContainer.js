import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCountry } from '../redux/data/dataSelectors';
import {
  fetchCountriesDataStart,
  fetchCountryDataStart,
  fetchGraphDataStart
} from '../redux/data/dataActions';
import App from '../App';

const mapStateToProps = createStructuredSelector({
  country: selectCountry
});

export default connect(mapStateToProps, {
  fetchCountriesDataStart,
  fetchCountryDataStart,
  fetchGraphDataStart
})(App);
