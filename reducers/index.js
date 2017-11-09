import {
    FETCH_DECKS,
    FETCH_DECK_DETAIL,
    DELETE_DECK
} from '../actions/types'

const INITIAL_STATE = {}

function deckReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_DECKS:
            return {

            }
        case FETCH_DECK_DETAIL:
            return {

            }
        case DELETE_DECK:
            return {

            }
        default:
            return state
    }
}

export default deckReducer