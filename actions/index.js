import { AsyncStorage } from 'react-native';
import * as FlashCardsAPI from '../utils/FlashCardsAPI'
import {
    FETCH_DECKS,
    FETCH_DECK_DETAIL
} from './types'

export function fetchDecks() {
    return (dispatch) => {
        FlashCardsAPI.getDecks().then(data => dispatch({ type: FETCH_DECKS, payload: data }));
    }
}

export function fetchDeckDetails(entryId) {
    return (dispatch) => {
        FlashCardsAPI.getDeck(entryId)
            .then(cardDeck => {
                dispatch({ type: FETCH_DECK_DETAIL, payload: JSON.parse(cardDeck)})
            }
        )
    }
}