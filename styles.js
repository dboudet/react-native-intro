import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: 'wrap',
    backgroundColor: "#de82fe",
    alignItems: "center",
    justifyContent: "center",
  },
  customText: {
    color: "white",
    fontWeight: "700",
    fontSize: 30,
  },
  box: {
    backgroundColor: "lightgray",
    height: 100,
    width: 100,
    margin: 10,
    borderStyle: "dashed",
    borderColor: "darkslategray",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
})
