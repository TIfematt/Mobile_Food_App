import { StyleSheet } from "react-native";
import { COLORS,SIZES, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  logo: {
    width:227,
    height: 134,
    paddingTop: 220,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 277,
    height: 50,
    borderRadius: 33,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingVertical: 18,
    paddingLeft: 30,
    color: COLORS.placeholderColor,
    // placeholderColor: COLORS.placeholderColor,
  },
  btn: {
    width: 217,
    height: 39,
    backgroundColor: COLORS.primary,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signup: {
    backgroundColor: COLORS.primary,
    width: 330,
    height: 68,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 33,
    borderTopLeftRadius: 33,

  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    width: '100%', 
    height: 654,
    backgroundColor: '#FEF9F9',
    padding: 20,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
  },
  signupText: {
    color: COLORS.primary,
    fontFamily: FONT.bold,
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 29
  }
})

export default styles