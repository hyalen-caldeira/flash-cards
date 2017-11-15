import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { fetchDeckDetails } from '../actions'

class DeckDetail extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.navTitle
        }
    }

    componentDidMount() {
        this.props.fetchDeckDetails(this.props.navigation.state.params.entryId);
    }

    componentDidUpdate() {
        this.props.fetchDeckDetails(this.props.navigation.state.params.entryId);
    }

    render() {
        return (
            <View style={ styles.container } >
                <View style = {styles.header}>
                    <MaterialCommunityIcons name='cards' size={120} color='lightblue' />
                </View>
                <Card title={this.props.title} >
                    <Text style={styles.cardHeader}>
                        {this.props.questions ? this.props.questions.length : 0} card(s)
                    </Text>
                    <View>
                        <Button
                            icon={{name: 'add-circle'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={ styles.buttonStyle }
                            title='Add Card'
                            onPress={() => {
                                this.props.navigation.navigate(
                                    'QuestionCreate',
                                    {
                                    navTitle: this.props.title,
                                    title: this.props.title
                                    }
                                );
                                }
                            }
                        />
                    </View>
                    <View>
                        <Button
                            icon={{name: 'play-arrow'}}
                            backgroundColor='#96C051'
                            buttonStyle={[styles.buttonStyle, { marginTop: 10 }]}
                            title='Start Quiz'
                            onPress={() => {
                                this.props.navigation.navigate(
                                    'Quiz',
                                    {
                                    navTitle: this.props.title,
                                    questions: this.props.questions }
                                )
                            }}
                        />
                    </View>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignContent: 'center'
    },
    header: {
        marginTop: 50,
        marginBottom: 25,
        alignContent: 'center', 
        alignItems: 'center', 
        justifyContent: 'space-around'
    },
    buttonStyle: {
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
    },
    cardHeader: {
        marginBottom: 10, 
        textAlign: 'center',
        fontSize: 15
    }
})

const mapStateToProps = state => {
    const { title, questions } = state.deckDetail ? state.deckDetail : ('', [])

    return { title, questions }
};

export default connect(mapStateToProps, { fetchDeckDetails })(DeckDetail);


// import React from 'react'
// import {
//     Text,
//     View,
//     FlatList,
//     TouchableOpacity
// } from 'react-native'

// class DeckDetail extends React.Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>Deck Detail</Text>
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

// export default DeckDetail