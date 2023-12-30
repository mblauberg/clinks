import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { 
  Layout, 
  Text, 
  Input, 
  Button, 
  Icon, 
  IconRegistry, 
  ApplicationProvider, 
  BottomNavigation, 
  BottomNavigationTab,
  Avatar,
  Divider,
  ListItem,
} from '@ui-kitten/components';
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
// import { default as theme } from "../theme.json";



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

// Account Screen
const AccountScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = () => {
    // login logic here
    // if successful:
    setIsLoggedIn(true);
  };

  const logout = () => {
    // logout logic here
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={login} />;
  }

  const renderItemAccessory = (style, iconName) => (
    <Icon {...style} name={iconName} />
  );

  const renderItem = (title, iconName) => (
    <ListItem
      title={title}
      accessoryLeft={(props) => renderItemAccessory(props, iconName)}
    />
  );

  return (
    <Layout style={accountStyles.container}>
      <View style={accountStyles.headerContainer}>
        <Avatar size='large' />
        <Text category='h1'>Michael Blauberg</Text>
      </View>
      <Layout style={accountStyles.contentContainer}>
        <Button style={accountStyles.button} appearance='ghost' accessoryLeft={<Icon name='heart' />}>
          Favourites
        </Button>
        <Button style={accountStyles.button} appearance='ghost' accessoryLeft={<Icon name='gift' />}>
          Refer a friend
        </Button>
        <Button style={accountStyles.button} appearance='ghost' accessoryLeft={<Icon name='bulb' />}>
          Submit a venue
        </Button>
        <Divider />
        {renderItem('Help', 'question-mark-circle')}
        {renderItem('Settings', 'settings')}
      </Layout>
      <Button onPress={logout}>Logout</Button>
    </Layout>
  );
};

const accountStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginVertical: 2,
  },
});

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

// App
const App = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = (index) => {
    console.log('onSelect called with index:', index);
    setSelectedIndex(index);
  };

  const renderScreen = () => {
    console.log('renderScreen called with selectedIndex:', selectedIndex);
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
      <ApplicationProvider {...eva} theme={eva.light}>
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