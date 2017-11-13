import { combineReducers } from 'redux';
import DeckReducer from './DeckReducer';
import DeckDetailReducer from './DeckDetailReducer';

export default combineReducers({
    decks: DeckReducer,
    deckDetail: DeckDetailReducer
});

// import {
//     FETCH_DECKS,
//     FETCH_DECK_DETAIL,
//     DELETE_DECK
// } from '../actions/types'

// const INITIAL_STATE = {}

// function decks (state = INITIAL_STATE, action) {
//     switch (action.type) {
//         case FETCH_DECKS:
//             console.log("A")
//             return action.payload
//         case FETCH_DECK_DETAIL:
//             console.log("B")
//             return {

//             }
//         case DELETE_DECK:
//             console.log("C")
//             return {

//             }
//         default:
//             console.log("D")
//             return state
//     }
// }

// export default decks