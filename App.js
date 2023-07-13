import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  Layout, 
  Text, 
  Input, 
  Button, 
  Icon, 
  IconRegistry, 
  ApplicationProvider, 
  BottomNavigation, 
  BottomNavigationTab 
} from '@ui-kitten/components';
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as theme } from "./theme.json";



// Homescreen
const HomeScreen = () => {
  return (
    <Layout style={homeStyles.container}>
      <Layout style={homeStyles.searchContainer}>
        <Input
          style={homeStyles.searchInput}
          placeholder="Search..."
        />
        <Button style={homeStyles.filterButton}>
          Filter
        </Button>
      </Layout>
      <Text>
        Open up App.js to start working on your app!
      </Text>
    </Layout>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginRight: 8,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  filterButtonText: {
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

// Safety Page
const SafetyScreen = () => {
  return (
    <Layout style={safetyStyles.screenContainer}>
      <Text style={safetyStyles.screenText}>Screen 1</Text>
    </Layout>
  );
};

const safetyStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  screenText: {
    fontSize: 20,
  },
});

// Account Page
const AccountScreen = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Handle search functionality here
    console.log('Search Text:', searchText);
  };

  return (
    <Layout style={accountStyles.screenContainer}>
      <Layout style={accountStyles.searchContainer}>
        <Input
          style={accountStyles.searchInput}
          placeholder="Type here to search"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
      </Layout>
      <Text style={accountStyles.screenText}>Screen 2</Text>
    </Layout>
  );
};

const accountStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  screenText: {
    fontSize: 20,
  },
});

// Bottom Tab Navigator
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


const App = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = (index) => {
    setSelectedIndex(index);
  };

  const renderScreen = () => {
    switch (selectedIndex) {
      case 0:
        return <HomeScreen />;
      case 1:
        return <SafetyScreen />;
      case 2:
        return <AccountScreen />;
    }
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        {renderScreen()}
        <BottomNavigation
          style={styles.bottomNavigation}
          selectedIndex={selectedIndex}
          onSelect={onSelect}
        >
          <BottomNavigationTab
            title="HOME"
            icon={HomeIcon}
          />
          <BottomNavigationTab
            title="SAFETY"
            icon={PulseIcon}
          />
          <BottomNavigationTab
            title="ACCOUNT"
            icon={AccountIcon}
          />
        </BottomNavigation>
      </ApplicationProvider>
    </>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
  },
});

export default App;


// App
// const App = () => {
//   return (
//     <>
//       <IconRegistry icons={EvaIconsPack} />
//       <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
//         <NavigationContainer>
//           <Tab.Navigator
//             initialRouteName="Home"
//           >
//             <Tab.Screen
//               name="Home"
//               component={HomeScreen}
//               options={{
//                 tabBarLabel: 'Home',
//                 tabBarIcon: PersonIcon,
//               }}
//             />
//             <Tab.Screen
//               name="Safety"
//               component={SafetyScreen}
//               options={{
//                 tabBarLabel: 'Safety',
//                 tabBarIcon: PulseIcon,
//               }}
//             />
//             <Tab.Screen
//               name="Account"
//               component={AccountScreen}
//               options={{
//                 tabBarLabel: 'Account',
//                 tabBarIcon: AccountIcon,
//               }}
//             />
//           </Tab.Navigator>
//         </NavigationContainer>
//       </ApplicationProvider>
//     </>
//   );  
// };




// Bottom tab
// const Tab = createBottomTabNavigator();

// App
// export default function App() {
//   return (
//     <ApplicationProvider
//     mapping={mapping}
//     theme={theme === 'light' ? lightTheme : darkTheme}
//     >
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen
//             name="Home"
//             component={HomeScreen}
//             options={{
//               tabBarIcon: ({ color }) => (
//                 <Icon name="home-outline" fill={color} style={{ width: 26, height: 26 }} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Safety"
//             component={Safety}
//             options={{
//               tabBarIcon: ({ color }) => (
//                 <Icon name="activity-outline" fill={color} style={{ width: 26, height: 26 }} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Account"
//             component={Account}
//             options={{
//               tabBarIcon: ({ color }) => (
//                 <Icon name="person-outline" fill={color} style={{ width: 26, height: 26 }} />
//               ),
//             }}
//           />
            
//         </Tab.Navigator>
//       </NavigationContainer>
//     </ApplicationProvider>
//   );
// }