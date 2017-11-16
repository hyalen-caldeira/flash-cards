import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import thunk from 'redux-thunk'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import reducer from './reducers'
import Deck from './components/Deck'
import DeckCreate from './components/DeckCreate'
import DeckDetail from './components/DeckDetail'
import DeckList from './components/DeckList'
import QuestionCreate from './components/QuestionCreate'
import Quiz from './components/Quiz'
import { midnightBlue } from "./utils/colors"
import { setLocalNotification } from './utils/utils'

// Add:
// Delete
// Notification
// Animation
// Random questions

const store = createStore (reducer, applyMiddleware(thunk))

function CustomStatusBar ({ backgroundColor, ...props }) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                {...props}
            />
        </View>
    )
}

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

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotification();
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <CustomStatusBar
                        backgroundColor={ midnightBlue }
                        barStyle="light-content"
                    />
                    <MainNavigator />
                </View>
          </Provider>
        )
    }
}

