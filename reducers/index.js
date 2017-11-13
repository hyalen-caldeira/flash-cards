import { combineReducers } from 'redux';
import DeckReducer from './deck_reducer';
import FlashCardsReducer from './flash_cards_reducer';

export default combineReducers({
    decks: DeckReducer,
    appReducer: FlashCardsReducer
})