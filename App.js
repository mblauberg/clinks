import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const Screen1 = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Screen 1</Text>
    </View>
  );
};

const Screen2 = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Handle search functionality here
    console.log('Search Text:', searchText);
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Type here to search"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
      </View>
      <Text style={styles.screenText}>Screen 2</Text>
    </View>
  );
};

const Screen3 = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Screen 3</Text>
    </View>
  );
};

const Screen4 = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Screen 4</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Screen1"
          component={Screen1}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="numeric-1" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Screen2"
          component={Screen2}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="numeric-2" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Screen3"
          component={Screen3}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="numeric-3" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Screen4"
          component={Screen4}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="numeric-4" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  screenText: {
    fontSize: 20,
  },
  searchContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});


