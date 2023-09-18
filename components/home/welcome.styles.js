import { StyleSheet } from "react-native";
import { COLORS,SIZES, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width:168,
    height: 120,
    paddingTop: 220,
  },
  title: {
    color:COLORS.white,
    paddingTop: 250,
    fontSize: SIZES.heading,
    fontFamily: FONT.bold
  },
  description: {
    width: 250, 
    color:'white',
    fontSize: 14,
    fontFamily: FONT.regular,
    textAlign: 'center',
    paddingTop: 15,
    lineHeight: 20
  },
  button: {
    width: 227,
    height: 47,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles