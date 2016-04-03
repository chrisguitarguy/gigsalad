import { connect } from 'react-redux'
import PerformerList from './PerformerList';
import * as actions from '../actions';

function matches(performer, attr, value) {
    return !value || value === performer[attr];
}

function filterPerformers(performers, state) {
    if (!performers || !performers.length) {
        return [];
    }

    const { categoryFilter, countryFilter, stateFilter } = state;

    console.log(state);
    return performers.filter(function (p) {
        return matches(p, 'category', categoryFilter)
            && matches(p, 'country', countryFilter)
            && matches(p, 'state', stateFilter);
    });
}

function mapStateToProps(state) {
    return {
        performers: filterPerformers(state.performers.all, state),
        loading: state.performers.loading,
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
