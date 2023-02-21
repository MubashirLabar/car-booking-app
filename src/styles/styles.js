import { Platform, StatusBar } from "react-native";

export const styles = {
  statusBarHeight: Platform.OS === "ios" ? 40 : StatusBar.currentHeight,
  buttonShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
};
