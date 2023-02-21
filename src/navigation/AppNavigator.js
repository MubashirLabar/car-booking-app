import { StatusBar, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import { styles } from "styles/styles";
import TabNavigation from "./TabNavigation";

import ProductDetails from "screens/productDetails";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <SafeAreaView
      style={{ paddingTop: styles.statusBarHeight }}
      className="flex flex-1"
    >
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTabs" component={TabNavigation} />
        <Stack.Screen
          name={routes.PRODUCT_DETAIL_SCREEN}
          component={ProductDetails}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default AppNavigator;
