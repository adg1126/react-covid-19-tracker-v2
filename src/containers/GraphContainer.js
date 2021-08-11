import { connect } from 'react-redux';
import { selectCountry, selectGraphData } from '../redux/data/dataSelectors';
import { fetchGraphDataStart } from '../redux/data/dataActions';
import Graph from '../components/Graph';

const mapStateToProps = state => ({
  country: selectCountry(state),
  graphData: selectGraphData(state)
});

export default connect(mapStateToProps, { fetchGraphDataStart })(Graph);
