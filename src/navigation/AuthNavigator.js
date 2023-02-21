import { StatusBar, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import { styles } from "styles/styles";

import LoginScreen from "screens/auth/login";
import VerificationCodeScreen from "screens/auth/verificationCode";
import CreateProfile from "screens/auth/createProfile";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <SafeAreaView
    style={{ paddingTop: styles.statusBarHeight }}
    className="flex flex-1 px-[26px] bg-primary-700"
  >
    <StatusBar
      backgroundColor="transparent"
      translucent
      barStyle="dark-content"
    />
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.AUTH_LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={routes.AUTH_VERIFICATION_CODE}
        component={VerificationCodeScreen}
      />
      <Stack.Screen name={routes.CREATE_PROFILE} component={CreateProfile} />
    </Stack.Navigator>
  </SafeAreaView>
);

export default AuthNavigator;
