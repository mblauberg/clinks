import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { 
  Layout, 
  Input, 
  Button,
  Divider,
  TopNavigation,
} from '@ui-kitten/components';


export const HomeScreen = ({ navigation}) => {
    
    const navigateDetails = () => {
        navigation.navigate('Details');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Clinks' alignment='center'/>
            <Divider/>
            <Layout style={homeStyles.container}>
                <Input
                    style={homeStyles.searchInput}
                    placeholder="Search..."
                />
                <Button style={homeStyles.filterButton}>
                    Filter
                </Button>
                <Divider/>
                <Button onPress={navigateDetails}>OPEN DETAILS</Button>
            </Layout>
        </SafeAreaView>
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