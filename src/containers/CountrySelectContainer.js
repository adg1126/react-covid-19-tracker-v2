import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCountriesNameAndCoords,
  selectCountry
} from '../redux/data/dataSelectors';
import { setCountry, setCoordinates, setZoom } from '../redux/data/dataActions';
import CountrySelect from '../components/CountrySelect';

const mapStateToProps = createStructuredSelector({
  countriesArr: selectCountriesNameAndCoords,
  country: selectCountry
});

export default connect(mapStateToProps, {
  setCountry,
  setCoordinates,
  setZoom
})(CountrySelect);
