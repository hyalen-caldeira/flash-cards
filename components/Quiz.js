import React from 'react'
import {
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native'

class Quiz extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Quiz</Text>
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

export default Quiz