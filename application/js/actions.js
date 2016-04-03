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
        return shouldFetchPerformers(getState()) ? dispatch(_fetchPerformers()) : Promise.resolve();
    }
}

export const REQUEST_PERFORMER = 'REQUEST_PERFORMER';
function requestPerformer(id) {
    return {
        type: REQUEST_PERFORMER,
        id: id
    };
}

export const RECEIVE_PERFORMER = 'RECEIVE_PERFORMER';
function receivePerformer(performer) {
    return {
        type: RECEIVE_PERFORMER,
        performer: performer
    };
}

function _fetchPerformer(id) {
    return function (dispatch) {
        dispatch(requestPerformer(id));
        fetch(`/api/performers/${id}`)
            .then(response => response.json())
            .then(json => dispatch(receivePerformer(json.data)));
    };
}

function shouldFetchPerformer(state, id) {
    return !state.performer.performer || state.performer.performer.id != id;
}

export function fetchPerformer(id) {
    return function (dispatch, getState) {
        return shouldFetchPerformer(getState(), id) ? dispatch(_fetchPerformer(id)) : Promise.resolve();
    }
}
