import { StatusBar } from "expo-status-bar"
import React, { useState, useEffect } from "react"
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ImageBackground,
} from "react-native"
import { Button, Icon } from "react-native-elements"
import Box from "../components/Box"

import styles from "../styles"

const image = {
  uri: "https://www.desktopbackground.org/download/540x960/2010/06/14/33008_phonegames-for-food-backgrounds_1600x1000_h.jpg",
}

export default function Home({ navigation }) {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch("https://bocacode-intranet-api.web.app/restaurants")
      .then((response) => response.json())
      .then((allRestaurants) => setRestaurants(allRestaurants))
      .catch((err) => console.error(err))
  }, [])
  // console.log(`Should be all restaurants data:\n ${restaurants}`)

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Button title="Add New Restaurant" onPress={() => navigation.navigate('AddNewRestaurant')} />
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={{ ...styles.container }}
        >
          <View style={styles.container}>
            <>
              {restaurants.map((singleRestaurant) => {
                return (
                  <>
                    <Box key={singleRestaurant.id} item={singleRestaurant} />
                  </>
                )
              })}
            </>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ScrollView>
  )
}
