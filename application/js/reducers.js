/* State:
 *  {
 *      performers: {
 *          all: Array,
 *          visible: Array,
 *          loading: Boolean
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

export function countryFilter(state=null, action) {
    return state;
}

export function stateFilter(state=null, action) {

    return state;
}

export function categoryFilter(state=null, action) {
    return state;
}
