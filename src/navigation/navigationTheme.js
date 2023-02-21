import { DefaultTheme } from "@react-navigation/native";
import colors from "../styles/colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary[700],
    background: colors.white,
  },
};
