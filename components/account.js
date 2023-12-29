import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Layout, Text, Divider, Avatar, Button, Icon, ListItem, } from '@ui-kitten/components';


export const AccountScreen = ( {navigation} ) => {
    
    const navigateLogin = () => {
        navigation.navigate('Login');
    };

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
                    <Button style={accountStyles.button} accessoryLeft={<Icon name='heart'/>} onPress={navigateLogin} >
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
                {renderItem('My Account', 'person')}
                {renderItem('Settings', 'settings')}
                {renderItem('Help', 'question-mark-circle')}
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
        padding: 8,
        justifyContent: 'space-between',
        marginVertical:12,
    },
    button: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 4,
        marginHorizontal: 8,
        borderRadius: 32,
    },
});