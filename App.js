import { StatusBar } from "expo-status-bar"
import React from "react"
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ImageBackground,
} from "react-native"
import Box from "./components/Box"
import styles from "./styles"

const image =   {uri: 'https://media.istockphoto.com/photos/blurred-blue-sky-and-sea-with-bokeh-light-picture-id1253837586?b=1&k=6&m=1253837586&s=170667a&w=0&h=6K4nC5sNKH7Wv8-KB4bbgl_Zg5x44fyWi6zgmufXWno='}

export default function App() {
  const students = [
    { name: "Dan", age: 39 },
    { name: "Emily", age: 29 },
    { name: "Chris", age: 29 },
    { name: "Zach", age: 19 },
    { name: "Matt", age: 19 },
    { name: "Val", age: 29 },
    { name: "Christian", age: 29 },
    { name: "Luiz", age: 29 },
  ]

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.customText}>Header</Text>
        <View style={styles.container}>
          {students.map((student) => {
            return <Box entireStudent={student} />
          })}
        </View>
      <ImageBackground source={image} resizeMode='cover' style={{...styles.container}}>
        </ImageBackground>

        <Button
          onPress={() => Alert.alert("Simple button pressed.")}
          title="Show Message"
          color="#841584"
          accessibilityLabel="Press button to display message."
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </ScrollView>
  )
}
