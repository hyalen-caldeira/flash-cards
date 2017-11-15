import React from 'react'
import { KeyboardAvoidingView, Keyboard, View, StyleSheet, Text } from 'react-native'
import { Card, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { addCardToDeck } from '../utils/FlashCardsAPI'

function ErrorMessage() {
    return (
        <Text style={styles.error}>
            <MaterialCommunityIcons name='close-circle-outline' size={20} color='#F00'/>
            {`  Both fields are required`}
        </Text>
    )
}

class QuestionCreate extends React.Component {
    state = {
        question: '',
        answer: '',
        errorMessage: ''
    }

    handleSubmit = () => {
        if (this.state.question && this.state.answer) {
            const { question, answer } = this.state
            const title = this.props.navigation.state.params.title

            const card = {
                question: question,
                answer: answer
            }

            addCardToDeck(title, card)

            this.setState({
                errorMessage: false,
                question: '',
                answer: ''
            })

            this.props.navigation.goBack(Keyboard.dismiss());
        } else {
            this.setState({ errorMessage: true })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.header}>
                    <MaterialCommunityIcons name='cards' size={120} color='lightblue' />
                </View>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior="padding"
                >
                    <Card title="Add a New Card" >
                        <FormLabel>Question:</FormLabel>
                        <FormInput
                            onChangeText={question => this.setState({ question })}
                            value={this.state.question}
                        />
                        <FormLabel>Answer:</FormLabel>
                        <FormInput
                            onChangeText={answer => this.setState({ answer })}
                            value={this.state.answer}
                        />
                        <FormValidationMessage>
                            {this.state.errorMessage ? <ErrorMessage/> : ''}
                        </FormValidationMessage>
                        <Button
                            title="Submit"
                            raised
                            backgroundColor="red"
                            onPress={this.handleSubmit}
                        />
                    </Card>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    header: {
        marginTop: 50,
        marginBottom: 20,
        alignContent: 'center', 
        alignItems: 'center'
    },
    error: {
        color: '#F00',
        fontSize: 15
    }
})

export default QuestionCreate;


// import React from 'react'
// import {
//     Text,
//     View,
//     FlatList,
//     TouchableOpacity
// } from 'react-native'

// class QuestionCreate extends React.Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>Question Create</Text>
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

// export default QuestionCreate