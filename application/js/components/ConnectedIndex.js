import { connect } from 'react-redux'
import Index from './Index';
import * as actions from '../actions';

function mapStateToProps(state) {
    return {
        errored: state.performers.errored
    };
}

const ConnectedIndex = connect(mapStateToProps)(Index);

export default ConnectedIndex;
