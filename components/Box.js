import React from "react"
import { View, Text } from "react-native"
import { Card, Button, Icon } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"

import styles from "../styles"

export default function Box({ item }) {
  const { name, address, rating, photoUrl } = item
  const navigation = useNavigation()

  return (
    <Card>
      <Card.Title>{name}</Card.Title>
      <Text style={{ marginBottom: 10 }}>{address}</Text>
      <Card.Divider />
      <Card.Image source={{ uri: photoUrl }}></Card.Image>
      <Button
        onPress={() => {
          navigation.navigate("RestaurantDetails", {
            restaurant: item,
          })
        }}
        icon={<Icon name="pizza-slice" type="font-awesome-5" color="#ffffff" />}
        title="More"
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        accessibilityLabel="Press button to display message."
      />
    </Card>
    // <View style={styles.box}>
    //   <Text style={styles.restaurantName}>{name}</Text>
    //   <Text style={styles.restaurantAddress}>{address}</Text>
    //   <Text style={styles.restaurantRating}>{rating}&#9733;</Text>
    // </View>
  )
}

// ******* not destructing props for example
// export default function Box( props ) {
//     // console.log(`singleRestaurant from box: ${props.singleRestaurant}`)
//     return(
//         <View style={styles.box}>
//             <Text style={styles.restaurantName}>{props.singleRestaurant.name}</Text>
//             <Text style={styles.restaurantAddress}>{props.singleRestaurant.address}</Text>
//             <Text style={styles.restaurantRating}>{props.singleRestaurant.rating}&#9733;</Text>
//         </View>
//     )
// }
