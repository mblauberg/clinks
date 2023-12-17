import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';


import { HomeScreen } from './home';
import { DetailsScreen } from './details';
import { SafetyScreen } from './safety';
import { AccountScreen } from './account';

const HomeStack = createStackNavigator();
const SafetyStack = createStackNavigator();
const AccountStack = createStackNavigator();

const HomeNavigator = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false}} >
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Details" component={DetailsScreen} />
    {/* Additional screens can be added here */}
  </HomeStack.Navigator>
);

const SafetyNavigator = () => (
  <SafetyStack.Navigator screenOptions={{ headerShown: false}} >
    <SafetyStack.Screen name="Safety" component={SafetyScreen} />
    {/* Additional screens can be added here */}
  </SafetyStack.Navigator>
);

const AccountNavigator = () => (
  <AccountStack.Navigator screenOptions={{ headerShown: false}} >
    <AccountStack.Screen name="Account" component={AccountScreen} />
    {/* Additional screens can be added here */}
  </AccountStack.Navigator>
);

// Bottom Tab Navigator Icons
const HomeIcon = (props) => (
  <Icon
    {...props}
    name='home'
  />
);

const PulseIcon = (props) => (
  <Icon {...props} name='activity'/>
);

const AccountIcon = (props) => (
  <Icon
    {...props}
    name='person'
  />
);

// Bottom tab navigator
const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='HOME' icon={HomeIcon}/>
    <BottomNavigationTab title='SAFETY' icon={PulseIcon} />
    <BottomNavigationTab title='ACCOUNT' icon={AccountIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={{ headerShown: false}}>
    <Screen name='Home' component={HomeNavigator} />
    <Screen name='Safety' component={SafetyNavigator} />
    <Screen name='Account' component={AccountNavigator} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);