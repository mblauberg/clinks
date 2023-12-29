import React, { useState } from 'react';
import { StyleSheet, 
    SafeAreaView, 
    TouchableOpacity, 
} from 'react-native';
import { 
  Layout, 
  Input, 
  Button,
  TopNavigation,
  Icon,
  Text,
} from '@ui-kitten/components';

const FilterIcon = (props) => (
    <TouchableOpacity onPress={props.onPress}>
      <Icon {...props} name='options-2' />
    </TouchableOpacity>
  );

export const HomeScreen = ({ navigation}) => {
    
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const toggleFilter = () => {
      setIsFilterVisible(!isFilterVisible);
    };

    const navigateDetails = () => {
        navigation.navigate('Details');
    };

    const navigateVenue = () => {
        navigation.navigate('Venue');
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Clinks' alignment='center'/>
            <Layout style={homeStyles.container}>
                <Layout style={homeStyles.searchContainer}>
                    <Input
                        style={homeStyles.searchInput}
                        placeholder="Search..."
                        accessoryRight={(props) => <FilterIcon {...props} onPress={toggleFilter} />}
                    />
                    {isFilterVisible && (
                        <Layout style={homeStyles.filterContainer}>
                            {/* Add your filter options here */}
                            <Text>Filter options...</Text>
                        </Layout>
                    )}
                </Layout>
                <Button style={homeStyles.button} onPress={navigateVenue}>VENUE</Button>
                <Button style={homeStyles.button} onPress={navigateDetails}>OPEN DETAILS</Button>
            </Layout>
        </SafeAreaView>
    );
  };
  
const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 16,
        flexDirection: 'column',
    },
    searchContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 16,
    },
    searchInput: {
        height: 40,
        marginRight: 8,
    },
    filterContainer: {
        padding: 10,
    },
    button: {
        marginVertical: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
});