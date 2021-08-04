import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles'

export default function Box({ entireStudent }) {
    const { name, age} = entireStudent
    return(
        <View style={styles.box}>
            <Text>{name}</Text>
            <Text>{age}</Text>
        </View>
    )
}