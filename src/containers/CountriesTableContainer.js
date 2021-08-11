import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCountriesDataForPreview } from '../redux/data/dataSelectors';
import CountriesTable from '../components/CountriesTable';

const mapStateToProps = createStructuredSelector({
  countriesData: selectCountriesDataForPreview
});

export default connect(mapStateToProps)(CountriesTable);
