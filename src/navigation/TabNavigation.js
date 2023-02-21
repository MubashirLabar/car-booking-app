import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "./routes";
import colors from "styles/colors";
import { BallotIcon, HomeIcon, UserIcon, BellIcon } from "icons";

import HomeNavigator from "./HomeNavigator";
import { CirclePlusIcon } from "../icons";

import ProfileScreen from "screens/profile";
import RequestScreen from "screens/request";
import AddVehicleScreen from "screens/addVehicle";

const Tab = createBottomTabNavigator();

function TabNavigation(props) {
  return (
    <Tab.Navigator
      initialRouteName={routes.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary[700],
        tabBarInactiveTintColor: colors.black[700],
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Montserrat_400Regular",
          padding: 0,
          margin: 0,
        },
      }}
    >
      <Tab.Screen
        name={routes.HOME_SCREEN}
        component={HomeNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size - 2} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.CREATE_REQUEST_SCREEN}
        component={AddVehicleScreen}
        options={{
          tabBarLabel: "Create Request",
          tabBarIcon: ({ color, size }) => (
            <CirclePlusIcon color={color} size={size - 2} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.REQUEST_SCREEN}
        component={RequestScreen}
        options={{
          tabBarLabel: "Requests",
          tabBarIcon: ({ color, size }) => (
            <BellIcon color={color} size={size - 2} />
          ),
        }}
      />

      <Tab.Screen
        name={routes.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <UserIcon color={color} size={size - 2} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
