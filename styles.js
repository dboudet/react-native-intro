import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "lightgray",
    height: 150,
    width: 150,
    margin: 10,
    padding: 6,
    borderStyle: "dashed",
    borderColor: "darkslategray",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsContainer:{
    alignItems:'center',
  },
  restaurantName: {
    fontSize: 18,
  },
  restaurantAddress: {
    marginVertical: 6,
  },
  addNewInput: {
    borderColor: "#666",
    borderStyle: "solid",
    borderWidth: 2,
    marginHorizontal: 20,
    paddingVertical: 10,
  },
})
