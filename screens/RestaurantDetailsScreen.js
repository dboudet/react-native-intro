import React from "react"
import { View, Text, Image, Button } from 'react-native'
import styles from "../styles"

export default function RestaurantDetails({route, navigation}) {
  const {address, id, name, photoUrl, rating} = route.params.restaurant

  return (
    <View style={styles.detailsContainer}>
      <Image source={{uri:photoUrl}} style={{width:'100%',height:200, resizeMode:'cover'}} />
      <Text style={styles.restaurantName}>{name}</Text>
      <Text style={styles.restaurantAddress}>{address}</Text>
      <Text style={styles.restaurantRating}>{rating}&#9733;</Text>
    </View>
  )
}