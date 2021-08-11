import { connect } from 'react-redux';
import {
  selectCountryData,
  selectCountriesData
} from '../redux/data/dataSelectors';
import { setCaseType } from '../redux/data/dataActions';
import InfoCardGrid from '../components/InfoCardGrid';

const mapStateToProps = state => ({
  countryData: selectCountryData(state) || selectCountriesData(state)
});

export default connect(mapStateToProps, { setCaseType })(InfoCardGrid);
