import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Layout, Text, Divider, Avatar, Button, Icon, ListItem, } from '@ui-kitten/components';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

export const AccountScreen = ( {navigation} ) => {
    
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigation.reset({index: 0, routes: [{ name: 'Login' }]});
                console.log("Logged out");
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    };

    // const renderItemAccessory = (style, iconName) => (
    //     <Icon {...style} name={iconName} />
    // );
    
    // const renderItem = (title, iconName) => (
    //     <ListItem
    //         title={title}
    //         accessoryLeft={(props) => renderItemAccessory(props, iconName)}
    //     />
    // );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Divider/>
            <Layout style={accountStyles.container}>
                <View style={accountStyles.headerContainer}>
                    <Avatar source={require('../../assets/account.png')} style={accountStyles.avatar} size='giant' />
                    <Text category='h1'>Michael Blauberg </Text>
                </View>
                <Layout style={accountStyles.contentContainer}>
                    <Button style={accountStyles.button} accessoryLeft={<Icon name='heart'/>}>
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
                {/* {renderItem('My Account', 'person')}
                {renderItem('Settings', 'settings')}
                {renderItem('Help', 'question-mark-circle')} */}
                <Button style={accountStyles.list} accessoryLeft={<Icon name='log-out' />} appearance='ghost' onPress={handleLogout}>
                    Logout
                </Button>
            </Layout>
        </SafeAreaView>
    );
};
  
const accountStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    headerContainer: {
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 32,
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
        justifyContent: 'space-between',
        marginVertical: 12,
    },
    button: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 4,
        marginHorizontal: 8,
        borderRadius: 32,
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'left',
        marginVertical: 12,
    }
});