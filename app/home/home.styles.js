import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {

  },
  hero : {
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 225,
    backgroundColor: COLORS.primary
  },
  heroText: {
    color: 'white',
    fontFamily: FONT.bold,
    fontSize: SIZES.headingLG
  },
  heroDesc : {
    width: 284,
    textAlign: 'center',
    color: 'white',
    fontFamily: FONT.regular,
    fontSize: SIZES.textlG,
    marginTop: 40,
  },
  rectangle : {
    width: '100%',
    height: 57,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    backgroundColor: 'white',
    
  },
  content: {
    
  }
})

export default styles