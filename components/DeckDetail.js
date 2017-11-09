import React from 'react'
import {
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native'

class DeckDetail extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Deck Detail</Text>
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

export default DeckDetail