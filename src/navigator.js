import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab, Icon } from "@ui-kitten/components";

import { HomeScreen } from "./screens/home";
import { SafetyScreen } from "./screens/safety";
import { AccountScreen } from "./screens/account";
import { DetailsScreen } from "./screens/details";
import { VenueScreen } from "./screens/venue";
import { LoginScreen } from "./screens/login";
import { SignupScreen } from "./screens/signup";
import { FavouritesScreen } from "./screens/favourites";

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

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
