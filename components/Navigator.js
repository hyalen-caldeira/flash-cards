import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import Deck from './Deck'
import DeckCreate from './DeckCreate'
import DeckDetail from './DeckDetail'
import DeckList from './DeckList'
import QuestionCreate from './QuestionCreate'
import Quiz from './Quiz'

const navOptions = {
    headerTintColor: '#FFF',
    headerStyle: {
        backgroundColor: '#1485ff'
    }
}

const Tabs = TabNavigator({
    Decks: {
        screen: Deck,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={30} color={tintColor} />
        }
    },
    DeckCreate: {
        screen: DeckCreate,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={30} color={tintColor} />
        }
    }
})

const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            ...navOptions,
            title: "Flash Cards",
        }
    },
    DeckDetail: {
        screen: DeckDetail,
        navigationOptions: {
            ...navOptions,
        }
    },
    QuestionCreate: {
        screen: QuestionCreate,
        navigationOptions: {
            ...navOptions,
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            ...navOptions,
        }
    }
})

export default MainNavigator