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

const store = createStore (
    reducer,
    applyMiddleware(thunk)
)

function CustomStatusBar ({ backgroundColor, ...props }) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                {...props}
            />
        </View>
    );
}

const Tabs = TabNavigator({
    Decks: {
        screen: Deck,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={30} color={tintColor} />
        }
    },
    AddEntry: {
        screen: DeckCreate,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={30} color={tintColor} />
        }
    }
})

const MainNavigator =  StackNavigator({
    Home: {
      screen: Tabs,
      navigationOptions: {
        title: "Flash Cards",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "purple"
  
        }
      }
    },
    DeckDetail: {
      screen: DeckDetail,
      navigationOptions: {
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "purple"
  
        }
      }
    },
    AddQuestion: {
      screen: QuestionCreate,
      navigationOptions: {
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "purple"
  
        }
      }
    },
    QuizMain: {
      screen: Quiz,
      navigationOptions: {
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "purple"
  
        }
      }
    }
  })

export default class App extends React.Component {
    // componentDidMount() {
    //     setLocalNotification();
    // }

    render() {
        return (
            // <View style={styles.container}>
            //     <Text>Open up App.js to start working on your app!</Text>
            //     <Text>Changes you make will automatically reload.</Text>
            //     <Text>Shake your phone to open the developer menu.</Text>
            // </View>
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <CustomStatusBar
                        backgroundColor="purple"
                        barStyle="light-content"
                    />
                    <Tabs />
                </View>
          </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

