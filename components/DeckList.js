import React from 'react'
import {
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native'

class DeckList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Deck List</Text>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        alignSelf: 'stretch'
    }
}

export default DeckList