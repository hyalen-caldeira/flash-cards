import { combineReducers } from 'redux';
import DeckReducer from './deck_reducer';
import DeckDetailReducer from './deck_detail_reducer';

export default combineReducers({
    decks: DeckReducer,
    deckDetail: DeckDetailReducer
})