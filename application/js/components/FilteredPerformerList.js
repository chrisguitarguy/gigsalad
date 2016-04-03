import { connect } from 'react-redux'
import PerformerList from './PerformerList';
import * as actions from '../actions';

function mapStateToProps(state) {
    return {
        performers: state.performers.all,
        loading: state.performers.loading
    };
}

function mapDispatchToProps(dispatch) {
    return  {
        fetchPerformers: () => dispatch(actions.fetchPerformers())
    };
}

const FilteredPerformerList =  connect(
    mapStateToProps,
    mapDispatchToProps
)(PerformerList);

export default FilteredPerformerList;
