/**
 * Navigation Configuration
 * Sets up the main navigation structure with stack and tab navigators
 */

import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab, Icon } from "@ui-kitten/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen";
import SafetyScreen from "./screens/SafetyScreen";
import AccountScreen from "./screens/AccountScreen";
import VenueScreen from "./screens/VenueScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import ReferScreen from "./screens/ReferScreen";
import SubmitScreen from "./screens/SubmitScreen";
import AccountInfoScreen from "./screens/AccountInfoScreen";
import SettingsScreen from "./screens/SettingsScreen";
import HelpScreen from "./screens/HelpScreen";

// Stack navigators for each main tab
const HomeStack = createStackNavigator();
const SafetyStack = createStackNavigator();
const AccountStack = createStackNavigator();

/**
 * Home Stack Navigator
 * Contains screens related to venue discovery and details
 */
const HomeNavigator = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Venue" component={VenueScreen} />
  </HomeStack.Navigator>
);

/**
 * Safety Stack Navigator
 * Contains screens related to safety features and resources
 */
const SafetyNavigator = () => (
  <SafetyStack.Navigator screenOptions={{ headerShown: false }}>
    <SafetyStack.Screen name="Safety" component={SafetyScreen} />
  </SafetyStack.Navigator>
);

/**
 * Account Stack Navigator
 * Contains all user account related screens including auth, profile, and settings
 */
const AccountNavigator = () => (
  <AccountStack.Navigator screenOptions={{ headerShown: false }}>
    <AccountStack.Screen name="Login" component={LoginScreen} />
    <AccountStack.Screen name="Signup" component={SignupScreen} />
    <AccountStack.Screen name="Account" component={AccountScreen} />
    <AccountStack.Screen name="Favourites" component={FavouritesScreen} />
    <AccountStack.Screen name="Refer" component={ReferScreen} />
    <AccountStack.Screen name="Submit" component={SubmitScreen} />
    <AccountStack.Screen name="AccountInfo" component={AccountInfoScreen} />
    <AccountStack.Screen name="Settings" component={SettingsScreen} />
    <AccountStack.Screen name="Help" component={HelpScreen} />
  </AccountStack.Navigator>
);

// Bottom Tab Navigator Icons
const HomeIcon = (props) => <Icon {...props} name="home" />;
const PulseIcon = (props) => <Icon {...props} name="activity" />;
const AccountIcon = (props) => <Icon {...props} name="person" />;

// Bottom tab navigator
const { Navigator, Screen } = createBottomTabNavigator();

/**
 * Custom Bottom Tab Bar Component
 * Uses UI Kitten's BottomNavigation with safe area handling for iPhone home indicator
 */
const BottomTabBar = ({ navigation, state }) => {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={[styles.tabBarContainer, { paddingBottom: insets.bottom }]}>
      <BottomNavigation
        appearance="noIndicator"
        selectedIndex={state.index}
        onSelect={(index) => navigation.navigate(state.routeNames[index])}
        style={styles.bottomNavigation}
      >
        <BottomNavigationTab title="HOME" icon={HomeIcon} />
        <BottomNavigationTab title="SAFETY" icon={PulseIcon} />
        <BottomNavigationTab title="ACCOUNT" icon={AccountIcon} />
      </BottomNavigation>
    </View>
  );
};

/**
 * Main Tab Navigator
 * Contains the three main sections of the app: Home, Safety, Account
 */
const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />} screenOptions={{ headerShown: false }}>
    <Screen name="T1" component={HomeNavigator} />
    <Screen name="T2" component={SafetyNavigator} />
    <Screen name="T3" component={AccountNavigator} />
  </Navigator>
);

/**
 * Root App Navigator
 * Wraps the tab navigator in a NavigationContainer
 */
const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: 'transparent',
  },
  bottomNavigation: {
    paddingTop: 8,
  },
});

export default AppNavigator;