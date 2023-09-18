import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";



const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: 33,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: 1.25,
  }),
});

export default styles;