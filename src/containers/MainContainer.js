import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCountries, selectCountry } from '../redux/data/dataSelectors';
import { setCountry } from '../redux/data/dataActions';
import Main from '../components/Main';

const mapStateToProps = createStructuredSelector({
  countries: selectCountries,
  country: selectCountry
});

export default connect(mapStateToProps, { setCountry })(Main);
