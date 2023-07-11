import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Create a stack navigator
const Stack = createStackNavigator();

// Screen components for each icon
const Screen1 = () => (
  <View style={styles.screenContainer}>
    <Text>Screen 1</Text>
  </View>
);
const Screen2 = () => (
  <View style={styles.screenContainer}>
    <Text>Screen 2</Text>
  </View>
);
const Screen3 = () => (
  <View style={styles.screenContainer}>
    <Text>Screen 3</Text>
  </View>
);
const Screen4 = () => (
  <View style={styles.screenContainer}>
    <Text>Screen 4</Text>
  </View>
);
const Screen5 = () => (
  <View style={styles.screenContainer}>
    <Text>Screen 5</Text>
  </View>
);

export default function App() {
  const [selectedIcon, setSelectedIcon] = useState(0);

  const handleIconPress = (index) => {
    setSelectedIcon(index);
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* Main content of the app */}
        <View style={styles.mainContent}>
          {selectedIcon === 0 && <Screen1 />}
          {selectedIcon === 1 && <Screen2 />}
          {selectedIcon === 2 && <Screen3 />}
          {selectedIcon === 3 && <Screen4 />}
          {selectedIcon === 4 && <Screen5 />}
        </View>

        {/* Bottom section bar */}
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.icon} onPress={() => handleIconPress(0)}>
            <Text style={selectedIcon === 0 ? styles.selectedIconText : styles.iconText}>Icon 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => handleIconPress(1)}>
            <Text style={selectedIcon === 1 ? styles.selectedIconText : styles.iconText}>Icon 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => handleIconPress(2)}>
            <Text style={selectedIcon === 2 ? styles.selectedIconText : styles.iconText}>Icon 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => handleIconPress(3)}>
            <Text style={selectedIcon === 3 ? styles.selectedIconText : styles.iconText}>Icon 4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => handleIconPress(4)}>
            <Text style={selectedIcon === 4 ? styles.selectedIconText : styles.iconText}>Icon 5</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
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
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: '#333',
  },
  selectedIconText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


