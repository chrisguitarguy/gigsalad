import { connect } from 'react-redux'
import PerformerFilter from './PerformerFilter';
import uniq from 'lodash.uniq';
import * as actions from '../actions';


function pluck(performers, attr) {
    return uniq(performers.map(function (p) {
        return p[attr];
    }).filter(function (a) {
        return !!a;
    })).sort();
}

function mapStateToProps(state) {
    const performers = state.performers.all;
    return {
        loading: state.performers.loading,
        categories: performers ? pluck(performers, 'category') : [],
        states: performers ? pluck(performers, 'state') : [],
        countries: performers ? pluck(performers, 'country') : []
    };
}

function mapDispatchToProps(dispatch) {
    return  {
        onCategoryChange: f => dispatch(actions.filterCategory(f)),
        onCountryChange: f => dispatch(actions.filterCountry(f)),
        onStateChange: f => dispatch(actions.filterState(f)),
    };
}

const ConnectedFilter =  connect(
    mapStateToProps,
    mapDispatchToProps
)(PerformerFilter);

export default ConnectedFilter;
