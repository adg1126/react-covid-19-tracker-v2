import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCoords,
  selectZoom,
  selectCountryCoords
} from '../redux/data/dataSelectors';
import { setCoordinates, setZoom } from '../redux/data/dataActions';
import Map from '../components/Map/Map';

const mapStateToProps = createStructuredSelector({
  center: selectCoords,
  zoom: selectZoom,
  countryCoords: selectCountryCoords
});

export default connect(mapStateToProps, { setCoordinates, setZoom })(Map);
