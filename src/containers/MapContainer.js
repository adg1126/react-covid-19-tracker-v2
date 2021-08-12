import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCoords, selectZoom } from '../redux/data/dataSelectors';
import Map from '../components/Map/Map';

const mapStateToProps = createStructuredSelector({
  coords: selectCoords,
  zoom: selectZoom
});

export default connect(mapStateToProps)(Map);
