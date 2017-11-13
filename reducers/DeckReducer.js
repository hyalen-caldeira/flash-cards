import { FETCH_DECKS } from '../actions/types'

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_DECKS:
            return action.payload;
        default:
            return state;
    }
}
