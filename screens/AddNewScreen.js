import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {Input} from 'react-native-elements'
import styles from '../styles'

export default function AddNewScreen() {
    const [restaurantName, setRestaurantName] = useState('')
    const [restaurantAddress, setRestaurantAddress] = useState('')
    const [restaurantPhotoUrl, setRestaurantPhotoUrl] = useState('')
    const [restaurantRating, setRestaurantRating] = useState('')

    const newRestaurant = {
        name: restaurantName,
        address: restaurantAddress,
        photoUrl: restaurantPhotoUrl,
        rating: restaurantRating,
    }

    const handleNewRestaurant = () => {
        fetch('https://bocacode-intranet-api.web.app/restaurants', {
            method: 'POST',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRestaurant)
        })
        .then(() => console.log('New restaurant added.'))
        .catch(err => console.error(err))
    }

    return(
        <View>
            <Text> This is add new screen</Text>
            <Input 
                placeholder='Restaurant Name' 
                style={styles.addNewInput} 
                autoCorrect={false}
                onChangeText={text => setRestaurantName(text)}
            />
            <Input
                placeholder='Address'
                style={styles.addNewInput} 
                autoCorrect={false}
                onChangeText={text => setRestaurantAddress(text)}
            />
            <Input
                placeholder='Photo URL'
                style={styles.addNewInput} 
                autoCorrect={false}
                keyboardType='url'
                onChangeText={text => setRestaurantPhotoUrl(text)}
            />
            <Input
                placeholder='Rating'
                style={styles.addNewInput} 
                autoCorrect={false}
                onChangeText={text => setRestaurantRating(text)}
            />
            <TouchableOpacity style={styles.addNewTouchable} onPress={handleNewRestaurant}> 
                <Text>Send New Restaurant</Text>

            </TouchableOpacity>
        </View>
    )
}