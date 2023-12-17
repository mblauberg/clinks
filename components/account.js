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
            <Divider/>
            <Layout style={accountStyles.container}>
                <View style={accountStyles.headerContainer}>
                    <Avatar source={require('../assets/account.png')} style={accountStyles.avatar} size='giant' />
                    <Text category='h1'>Michael Blauberg </Text>
                </View>
                <Layout style={accountStyles.contentContainer}>
                    <Button style={accountStyles.button} accessoryLeft={<Icon name='heart' />}>
                        Favourites
                    </Button>
                    <Button style={accountStyles.button} accessoryLeft={<Icon name='gift' />}>
                        Refer a friend
                    </Button>
                    <Button style={accountStyles.button} accessoryLeft={<Icon name='bulb' />}>
                        Submit a venue
                    </Button>
                </Layout>
                <Divider />
                {renderItem('Help', 'question-mark-circle')}
                {renderItem('Settings', 'settings')}
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
        paddingVertical: 60,
        paddingHorizontal: 16,
    },
    avatar: {
        width: 124,
        height: 124,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 24,
    },
    contentContainer: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 5,
        marginHorizontal: 5,
    },
});