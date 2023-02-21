import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";

import HomeScreen from "screens/home";

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator
      nitialRouteName={routes.HOME_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
