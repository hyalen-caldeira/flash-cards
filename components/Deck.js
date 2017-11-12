import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

class Deck extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Deck</Text>
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