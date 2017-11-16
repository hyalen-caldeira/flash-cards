import React from 'react'
import { View, Text } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Badge, Button, Card } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { clearLocalNotification, setLocalNotification } from '../utils/utils'

class Quiz extends React.Component {
    state = {
        showQuestion: true,
        questions: this.props.navigation.state.params.questions,
        currentQuestion: 0,
        correctAnswers: 0
    }

    resetNotification() {
        clearLocalNotification().then(setLocalNotification);
    }

    backToDeck() {
        const backAction = NavigationActions.back()
        this.resetQuiz()
        this.props.navigation.dispatch(backAction)
        this.resetNotification()
    }

    resetQuiz() {
        this.setState(() => {
            return {
                showQuestion: true,
                questions: this.props.navigation.state.params.questions,
                currentQuestion: 0,
                correctAnswers: 0
            }
        })

        this.resetNotification()
    }

    renderCard() {
        const {
            questions,
            currentQuestion,
            correctAnswers
        } = this.state;

        let rendered = ""

        if (currentQuestion < questions.length) {
            rendered = (
                <Card
                    title={
                        this.state.showQuestion
                            ? `Q: ${questions[currentQuestion].question}`
                            : `A: ${questions[currentQuestion].answer}`
                    }
                >
                    <View>
                        <Text style={styles.questionsRemaining}>
                            {`Question ${currentQuestion+1} of ${questions.length}`}
                        </Text>
                    </View>
                    <View style={styles.badgeStyle}>
                        <Badge
                            containerStyle={{ backgroundColor: 'lightblue'}}
                            onPress={() => this.setState({ showQuestion: !this.state.showQuestion })}
                        >
                            <Text>
                                {this.state.showQuestion ? "Answer" : "Question"}
                            </Text>
                        </Badge>
                    </View>
                    <Button
                        buttonStyle={styles.buttonStyle}
                        title="Correct"
                        backgroundColor='green'
                        onPress={() => {
                            this.setState({
                                currentQuestion: currentQuestion+1,
                                correctAnswers: correctAnswers+1
                            })
                        }}
                    />
                    <Button
                      buttonStyle={[styles.buttonStyle, { marginTop: 10 }]}
                      title="Incorrect"
                      backgroundColor='red'
                      onPress={() => this.setState({ currentQuestion: currentQuestion+1 })}
                    />
                </Card>
            )
        } else {
            rendered = (
                <Card
                  title={`You got ${correctAnswers} out of ${questions.length}`}
                >
                    <Button
                        buttonStyle={styles.buttonStyle}
                        title="Start Over"
                        backgroundColor='green'
                        onPress={() => this.resetQuiz()}
                    />
                    <Button
                        buttonStyle={[styles.buttonStyle, { marginTop: 10 }]}
                        title="Back to Deck"
                        backgroundColor='red'
                        onPress={() => this.backToDeck()}
                    />
                </Card>
            )
      }

      return (
          <View>
              <View style = {styles.header}>
                  <MaterialCommunityIcons name='cards' size={120} color='lightblue' />
              </View>
              {rendered}
          </View>
      )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderCard()}
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        alignContent: 'center'
    },
    header: {
        marginTop: 50,
        marginBottom: 20,
        alignContent: 'center', 
        alignItems: 'center'
    },
    buttonStyle: {
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
    },
    questionsRemaining: {
        textAlign: 'center',
        marginBottom: 10
    },
    badgeStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        marginTop: 0
    }
}

export default Quiz