import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCountriesDataForPreview,
  selectCaseType
} from '../redux/data/dataSelectors';
import MapData from '../components/Map/MapData';

const mapStateToProps = createStructuredSelector({
  countriesData: selectCountriesDataForPreview,
  caseType: selectCaseType
});

export default connect(mapStateToProps)(MapData);
