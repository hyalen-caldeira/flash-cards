import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Card, Badge } from 'react-native-elements'
import { fetchDecks } from '../actions'

class DeckList extends React.Component {
    componentDidMount() {
        this.props.fetchDecks()
    }

    componentDidUpdate() {
        this.props.fetchDecks()
    }

    renderItem = ({ item }) =>
        <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
                'DeckDetail',
                {
                    entryId: item.key,
                    navTitle: item.title
                }
            )}>
            <View>
                <View style={ styles.listItem }>
                    <Text style={ styles.title }>{item.title}</Text>
                    <Badge containerStyle={{ backgroundColor: 'lightblue', padding: 100, marginBottom: 5}}>
                        <Text style={ styles.cardNumber }>
                            {`${item.questions.length} card(s)`}
                        </Text>
                    </Badge>
                </View>
            </View>
        </TouchableOpacity>

    render() {
        return (
            <View style={styles.container}>
                {this.props.decks.length > 0 ?
                    <FlatList
                        data={this.props.decks}
                        renderItem={this.renderItem}
                    />
                    : <Card title="Create a deck to get started!"/>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch'
    },
    listItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        marginBottom: 20,
        shadowRadius: 6,
        shadowOpacity: .5,
        shadowColor: 'rgba(0,0,0,24)',
        marginTop: 5,
        shadowOffset: {
            width: 1,
            height: 5
        }
    },
    title: {
        fontSize: 20,
        padding: 5
    },
    cardNumber: {
        // fontSize: 10,
        // color: '#BBB'
        // padding: 5
    }
})

const mapStateToProps = state => {
    const decks = state.decks

    return { decks }
}

export default connect(mapStateToProps, { fetchDecks })(DeckList)