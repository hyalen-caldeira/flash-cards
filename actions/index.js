import { AsyncStorage } from 'react-native';
import * as FlashCardsAPI from '../utils/FlashCardsAPI'
import {
    FETCH_DECKS,
    FETCH_DECK_DETAIL
} from './types'

export function fetchDeckDB() {
    return (dispatch) => {
        FlashCardsAPI.getDecks().then(data => dispatch({ type: FETCH_DECKS, payload: data }));
    }
}