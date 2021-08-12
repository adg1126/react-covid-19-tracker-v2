import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCountry, selectIsFetched } from '../redux/data/dataSelectors';

import WithSpinner from './WithSpinner';
import Main from '../components/Main';

const mapStateToProps = createStructuredSelector({
  country: selectCountry,
  isFetched: selectIsFetched
});

export default compose(connect(mapStateToProps), WithSpinner)(Main);
