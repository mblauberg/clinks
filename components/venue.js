import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card, Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

const HeartIcon = (props) => (
  <Icon {...props} name='heart-outline' />
);


export const VenueScreen = ({ navigation }) => {
    const navigateBack = () => {
      navigation.goBack();
    };
  
    const BackAction = () => (
      <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );
  
    const HeartAction = () => (
      <TopNavigationAction icon={HeartIcon} onPress={() => {}}/>
    );
  
    // TODO: Define the components for venue details, promotions, tabs, and featured items here
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation
          title='Venue'
          alignment='center'
          accessoryLeft={BackAction}
          accessoryRight={() => (
            <View style={styles.iconContainer}>
              <HeartAction />
            </View>
          )}
        />
        <Divider/>
        <Layout style={{ flex: 1 }}>
          {/* Venue details, tabs, promotions, and featured items will go here */}
        </Layout>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    iconContainer: {
      flexDirection: 'row',
      width: 80,
      justifyContent: 'space-between'
    },
    // More styles for other components will be added here
  });