import { connect } from 'react-redux'
import SinglePerformer from './SinglePerformer';
import * as actions from '../actions';

function mapStateToProps(state) {
    return {
        performer: state.performer.performer,
        loading: state.performer.loading
    };
}

function mapDispatchToProps(dispatch) {
    return  {
        fetchPerformer: (id) => dispatch(actions.fetchPerformer(id))
    };
}

const ConnectedPerformer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SinglePerformer);

export default ConnectedPerformer;
