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
const LoginScreen = () => {
  // if not logged in:
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = () => {
    // login logic here

    // if successful:
    // navigate to account page

  };

  return (
    <Layout style={loginStyles.screenContainer}>
            <Input
        placeholder='Email'
        value={email}
        onChangeText={nextValue => setEmail(nextValue)}
      />
      <Input
        placeholder='Password'
        value={password}
        onChangeText={nextValue => setPassword(nextValue)}
      />
      <Button onPress={login}>Login</Button>
    </Layout>
  );
};


const AccountScreen = () => {  
  // if not logged in:
  return <LoginScreen />;
  // if logged in:
  const logout = () => {
    // logout logic here

    // if successful:
    // navigate to login page
  };
  return (
    <Layout style={accountStyles.screenContainer}>
// show account info including: profile picture, name, email, phone number and an edit account button
// show settings button, which will take you to a settings page
// show help button, which will take you to a help page
// show logout button, which will log you out and take you to the login/signup page
      <Text style={accountStyles.screenText}>Account Screen</Text>
      <Button onPress={logout}>Logout</Button>
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

const loginStyles = StyleSheet.create({
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

const SettingsScreen = () => {
  return (
    <Layout style={settingsStyles.screenContainer}>
      <Text style={settingsStyles.screenText}>Screen 3</Text>
    </Layout>
  );
};

const settingsStyles = StyleSheet.create({
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

const HelpScreen = () => {
  return (
    <Layout style={helpStyles.screenContainer}>
      <Text style={helpStyles.screenText}>Screen 4</Text>
    </Layout>
  );
};

const helpStyles = StyleSheet.create({
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
      // return account screen if logged in, otherwise return login screen
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