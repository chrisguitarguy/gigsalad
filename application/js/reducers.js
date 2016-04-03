/* State:
 *  {
 *      performers: {
 *          all: Array,
 *          visible: Array,
 *          loading: Boolean
 *      },
 *      performer: {
 *          loading: Boolean
 *          performer: object|null
 *      },
 *      countryFilter: string|null,
 *      stateFilter: string|null,
 *      categoryFilter: string|null
 *  }
 */

import * as actions from './actions';

export function performers(state, action) {
    if (typeof state === 'undefined') {
        return {
            all: null,
            loading: true
        };
    }

    switch (action.type) {
        case actions.REQUEST_PERFORMERS:
            return {
                loading: true,
                all: null
            };
        case actions.RECEIVE_PERFORMERS:
            return {
                loading: false,
                all: action.performers
            };
    }

    return state;
}

export function performer(state, action) {
    if (typeof state === 'undefined') {
        return {
            loading: true,
            performer: null
        };
    }

    switch (action.type) {
        case actions.REQUEST_PERFORMER:
            return {
                loading: true,
                performer: null
            };
        case actions.RECEIVE_PERFORMER: 
            return {
                loading: false,
                performer: action.performer
            };
    }

    return state;
}

export function countryFilter(state=null, action) {
    return state;
}

export function stateFilter(state=null, action) {

    return state;
}

export function categoryFilter(state=null, action) {
    return state;
}
