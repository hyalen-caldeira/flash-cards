import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import thunk from 'redux-thunk'
import { Constants } from 'expo'
import reducer from './reducers'
import { midnightBlue } from "./utils/colors"
import { setLocalNotification } from './utils/utils'
import MainNavigator from './components/Navigator'

// TODO:
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

