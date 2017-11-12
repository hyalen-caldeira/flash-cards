import React from 'react'
import { View, Text, KeyboardAvoidingView, Keyboard, StyleSheet, Platform } from 'react-native'
import { Button, Card, FormInput, FormValidationMessage } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { saveDeckTitle } from '../utils/FlashCardsAPI'

export default class AddEntry extends React.Component {
    state = {
        title: '',
        errorMessage: false
    };

    handleSubmit = () => {
        if (this.state.title) {
            const { title } = this.state;
            saveDeckTitle(title);

            this.setState({
                errorMessage: false,
                title: ''
            })

            this.props.navigation.navigate(
                'DeckDetail',
                { entryId: title, navTitle: title },
                Keyboard.dismiss()
            )
        } else {
            this.setState({ errorMessage: true })
        }
    }

    render() {
        const { title, errorMessage } = this.state

        return (
            <View style = {{ flex: 1, justifyContent: 'space-around' }}>
                <View style = {{flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'space-around'}}>
                    <MaterialCommunityIcons name='cards' size={120} color='lightblue' />
                    <Text style={{fontSize: 30, alignItems: 'center', textAlign: 'center', padding: 20 }}>
                        What is the title of your new deck?
                    </Text>
                </View>
                <KeyboardAvoidingView 
                    style = {{
                        flex: 1,
                        justifyContent: 'space-around',
                        alignContent: 'center',
                        // alignItems: 'center',
                        padding: 10,
                    }}
                    behavior="padding"
                >
                    <Card title="Title" >
                        <FormInput
                            onChangeText = {title => this.setState({ title })}
                            value = { title }
                        />
                        <FormValidationMessage>
                            {errorMessage ? 'Required field ...' : ''}
                        </FormValidationMessage>
                        <Button
                            style = {{ padding: 30 }}
                            title="Create Deck"
                            raised
                            backgroundColor = 'red'
                            onPress = { this.handleSubmit }
                        />
                    </Card>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        // backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    noDataText: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20
    }
})

// import React from 'react'
// import {
//     Text,
//     View,
//     FlatList,
//     TouchableOpacity
// } from 'react-native'

// class DeckCreate extends React.Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>Deck Create</Text>
//             </View>
//         )
//     }
// }

// const styles = {
//     containerStyle: {
//         flex: 1,
//         alignSelf: 'stretch'
//     }
// }

// export default DeckCreate