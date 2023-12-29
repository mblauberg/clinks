import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Layout, Text, TopNavigation, Divider } from '@ui-kitten/components';

export const SafetyScreen = ({ navigation }) => {
    
    // const navigateDetails = () => {
    //     navigation.navigate('Details');
    // };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Safety' alignment='center'/>
            <Divider/>
            <Layout style={safetyStyles.screenContainer}>
                <Text style={safetyStyles.screenText}>Stay safe!!</Text>
            </Layout>
        </SafeAreaView>
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