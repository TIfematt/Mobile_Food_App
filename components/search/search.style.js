import { StyleSheet } from "react-native";
import { FONT } from "../../constants";

const styles = StyleSheet.create({
  box: {
    width: 232,
    height: 37,
    backgroundColor: 'white',
    borderRadius: 33,
    fontSize: 17,
    paddingLeft: 52,
    fontFamily: FONT.regular,

  },
  glass: {
    position: 'relative',
    top: 28,
    left: 22,
    zIndex: 2
  }
})

export default styles;