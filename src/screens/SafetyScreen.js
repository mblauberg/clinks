import React from 'react';
import { SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Layout, Text, Button, Icon, useTheme } from '@ui-kitten/components';

const SafetyScreen = ({ navigation }) => {
  // Get current theme and create styles with that theme
  const theme = useTheme();
  const styles = createStyles(theme);

  // Dummy variables for testing
  const avatar = require('../../assets/account.png');
  const address = '123 Queensland St, Brisbane City, QLD, Aus';

  // Dummy function for button press
  const handlePress = (service) => {
    console.log(`Button pressed for: ${service}`);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Layout style={styles.layout}>
        <TouchableOpacity style={styles.emergencyButton} onPress={() => handlePress('emergency')}>
          <Icon name='radio' style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.emergencyText} category={"h4"}>TAP IN CASE OF EMERGENCY</Text>
        
        <Layout style={styles.card}>
          <Text style={styles.locationText} category={"h6"}>Your current location:</Text>
          <Layout style={styles.addressCard}>
            <Image
              source={avatar}
              style={styles.avatar}
            />
            <Text style={styles.addressText} category={"s1"}>{address}</Text>
          </Layout>
        </Layout>

        <Button style={styles.emergencyCallButton} status='danger' onPress={() => handlePress('000')}>
          000 EMERGENCY
        </Button>

        <Layout style={styles.servicesRow}>
          <Button style={styles.serviceButton} onPress={() => handlePress('crimeStoppers')}>
            CRIME STOPPERS
          </Button>
          <Button style={styles.serviceButton} onPress={() => handlePress('chaplainWatch')}>
            CHAPLAINWATCH
          </Button>
        </Layout>

        <Button style={styles.serviceButton} onPress={() => handlePress('redFrogs')}>
          RED FROGS AUSTRALIA
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const createStyles = (theme) => StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme["background-basic-color-1"], // Dark grey background
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 48,
  },
  emergencyButton: {
    backgroundColor: theme['color-danger-500'],
    width: 192,
    height: 192,
    borderRadius: 96,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 64,
    height: 64,
  },
  emergencyText: {
    marginVertical: 24,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    borderRadius: 24,
    alignItems: 'center',
    backgroundColor: theme['background-basic-color-4'],
    marginBottom: 32,
  },
  locationText: {
    alignSelf: 'flex-start',
    marginTop: 24,
    marginLeft: 24,
  },
  addressCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 24,
    backgroundColor: theme['background-basic-color-4'],
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  addressText: {
    flex: 1,
  },
  emergencyCallButton: {
    width: '100%',
    marginBottom: 20,
  },
  servicesRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  serviceButton: {
    flex: 1,
    marginHorizontal: 4,
  },
});

export default SafetyScreen;
