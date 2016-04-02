import fetch from 'isomorphic-fetch';

export const REQUEST_PERFORMERS = 'REQUEST_PERFORMERS';
function requestPerformers() {
    return {
        type: REQUEST_PERFORMERS
    };
}

export const RECEIVE_PERFORMERS = 'RECEIVE_PERFORMERS';
function receivePerformers(performers) {
    return {
        type: RECEIVE_PERFORMERS,
        performers: performers
    };
}

function _fetchPerformers() {
    return function (dispatch) {
        dispatch(requestPerformers());
        fetch('/api/performers')
            .then(response => response.json())
            .then(json => dispatch(receivePerformers(json.data)));
    };
}

function shouldFetchPerformers(state) {
    return null === state.performers.all;
}

export function fetchPerformers() {
    return function (dispatch, getState) {
        console.log(shouldFetchPerformers(getState()));
        return shouldFetchPerformers(getState()) ? dispatch(_fetchPerformers()) : Promise.resolve();
    }
}
