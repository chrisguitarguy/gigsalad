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

export const ERRORED_PERFORMERS = 'ERRORED_PERFORMERS';
function errorPerformers() {
    return {
        type: ERRORED_PERFORMERS
    };
}

function _fetchPerformers() {
    return function (dispatch) {
        dispatch(requestPerformers());
        fetch('/api/performers')
            .then(response => {
                if (response.ok) {
                    return response.json().then(json => dispatch(receivePerformers(json.data)));
                } else {
                    dispatch(errorPerformers());
                }
            }, () => dispatch(errorPerformer()));
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

export const ERRORED_PERFORMER = 'ERRORED_PERFORMER';
function errorPerformer() {
    return {
        type: ERRORED_PERFORMER
    };
}

function _fetchPerformer(id) {
    return function (dispatch) {
        dispatch(requestPerformer(id));
        fetch(`/api/performers/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json().then(json => dispatch(receivePerformer(json.data)));
                } else {
                    dispatch(errorPerformer());
                }
            }, () => dispatch(errorPerformer()));
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

function filterAction(actionType) {
    return function (value) {
        return {
            type: actionType,
            filter: value
        };
    };
}

export const FILTER_CATEGORY = 'FILTER_CATEGORY';
export const filterCategory = filterAction(FILTER_CATEGORY);

export const FILTER_COUNTRY = 'FILTER_COUNTRY';
export const filterCountry = filterAction(FILTER_COUNTRY);

export const FILTER_STATE = 'FILTER_STATE';
export const filterState = filterAction(FILTER_STATE);
