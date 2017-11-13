import React from 'react'
import {Text, View, StyleSheet } from 'react-native'
import DeckList from './DeckList'

class Deck extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <DeckList {...this.props} />
            </View>
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
})

export default Deck