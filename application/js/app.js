import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import  * as reducers from './reducers';
import Root from './containers/Root';
import App from './components/App';
import ConnectedIndex from './components/ConnectedIndex';
import ConnectedPerformer from './components/ConnectedPerformer';
import Error from './components/Error';

function Error404() {
    return <Error title="Page Not Found" />;
}

function makeRoutes() {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={ConnectedIndex} />
            <Route path=":id/:slug" component={ConnectedPerformer} />
            <Route path="*" component={Error404} />
        </Route>
    );
}

function run() {
    const store = createStore(combineReducers({
        ...reducers,
        routing: routerReducer
    }), compose(
        applyMiddleware(thunkMiddleware),
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    ));
    const history = syncHistoryWithStore(browserHistory, store);
    const routes = makeRoutes();

    render(<Root history={history} routes={routes} store={store} />, document.getElementById('app'));
}

run();
