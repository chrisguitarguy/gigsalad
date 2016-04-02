import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connect } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import  * as reducers from './reducers';
import Root from './containers/Root';
import App from './components/App';
import Index from './components/Index';
import * as actions from './actions';

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

const ConnectedIndex = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);

function makeRoutes() {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={ConnectedIndex} />
        </Route>
    );
}

function run() {
    const store = createStore(combineReducers({
        ...reducers,
        routing: routerReducer
    }), applyMiddleware(thunkMiddleware));
    const history = syncHistoryWithStore(browserHistory, store);
    const routes = makeRoutes();

    render(<Root history={history} routes={routes} store={store} />, document.getElementById('app'));
}

run();
