import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Layout, Text, TopNavigation, Divider, Avatar, Button, Icon, ListItem, } from '@ui-kitten/components';


export const AccountScreen = () => {
    
    // const navigateDetails = () => {
    //     navigation.navigate('Details');
    // };

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
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Account' alignment='center'/>
            <Divider/>
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
            </Layout>
        </SafeAreaView>
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