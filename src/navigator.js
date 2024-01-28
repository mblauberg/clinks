import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab, Icon } from "@ui-kitten/components";

import HomeScreen from "./screens/HomeScreen";
import SafetyScreen from "./screens/SafetyScreen";
import AccountScreen from "./screens/AccountScreen";
import DetailsScreen from "./screens/DetailsScreen";
import VenueScreen from "./screens/VenueScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import ReferScreen from "./screens/ReferScreen";
import SubmitScreen from "./screens/SubmitScreen";
import MyAccountScreen from "./screens/MyAccountScreen";
import SettingsScreen from "./screens/SettingsScreen";
import HelpScreen from "./screens/HelpScreen";

const HomeStack = createStackNavigator();
const SafetyStack = createStackNavigator();
const AccountStack = createStackNavigator();

const HomeNavigator = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Details" component={DetailsScreen} />
    <HomeStack.Screen name="Venue" component={VenueScreen} />
    {/* Additional screens can be added here */}
  </HomeStack.Navigator>
);

const SafetyNavigator = () => (
  <SafetyStack.Navigator screenOptions={{ headerShown: false }}>
    <SafetyStack.Screen name="Safety" component={SafetyScreen} />
    {/* Additional screens can be added here */}
  </SafetyStack.Navigator>
);

const AccountNavigator = () => (
  <AccountStack.Navigator screenOptions={{ headerShown: false }}>
    <AccountStack.Screen name="Login" component={LoginScreen} />
    <AccountStack.Screen name="Signup" component={SignupScreen} />
    <AccountStack.Screen name="Account" component={AccountScreen} />
    <AccountStack.Screen name="Favourites" component={FavouritesScreen} />
    <AccountStack.Screen name="Refer" component={ReferScreen} />
    <AccountStack.Screen name="Submit" component={SubmitScreen} />
    <AccountStack.Screen name="MyAccount" component={MyAccountScreen} />
    <AccountStack.Screen name="Settings" component={SettingsScreen} />
    <AccountStack.Screen name="Help" component={HelpScreen} />
    {/* Additional screens can be added here */}
  </AccountStack.Navigator>
);

// Bottom Tab Navigator Icons
const HomeIcon = (props) => <Icon {...props} name="home" />;

const PulseIcon = (props) => <Icon {...props} name="activity" />;

const AccountIcon = (props) => <Icon {...props} name="person" />;

// Bottom tab navigator
const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    appearance="noIndicator"
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="HOME" icon={HomeIcon} />
    <BottomNavigationTab title="SAFETY" icon={PulseIcon} />
    <BottomNavigationTab title="ACCOUNT" icon={AccountIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />} screenOptions={{ headerShown: false }}>
    <Screen name="T1" component={HomeNavigator} />
    <Screen name="T2" component={SafetyNavigator} />
    <Screen name="T3" component={AccountNavigator} />
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

export default AppNavigator;