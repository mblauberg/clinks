import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { 
  Layout, 
  Input, 
  Button,
  Icon,
  Text,
  TopNavigation,
  useTheme
} from '@ui-kitten/components';

const FilterIcon = (props) => (
    <TouchableOpacity onPress={props.onPress}>
      <Icon {...props} name='options-2' />
    </TouchableOpacity>
  );

const SearchBar = ({ onFilterPress, isFilterVisible, styles }) => (
    <Layout style={styles.searchContainer}>
        <Input
            style={styles.searchInput}
            placeholder="Search..."
            accessoryLeft={(props) => <Icon {...props} name='search-outline' />}
            accessoryRight={(props) => <FilterIcon {...props} onPress={onFilterPress} />}
        />
        {isFilterVisible && (
            <Layout style={styles.filterContainer}>
                {/* Filter options */}
                <Text>Filter options...</Text>
            </Layout>
        )}
    </Layout>
);

export const HomeScreen = ({ navigation}) => {

    const theme = useTheme();
    const styles = createStyles(theme);

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
            <TopNavigation 
                alignment='center'  
                accessoryRight={() => <SearchBar 
                    onFilterPress={toggleFilter} 
                    isFilterVisible={isFilterVisible} 
                    styles={styles} 
                />}
            />
            <ScrollView style={styles.container}>
            <Layout style={{flex: 1}}>
                <Button style={styles.button} onPress={navigateVenue}>VENUE</Button>
                <Button style={styles.button} onPress={navigateDetails}>OPEN DETAILS</Button>
            </Layout>
            </ScrollView>
        </SafeAreaView>
    );
};
  
const createStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        flexDirection: 'column',
        backgroundColor: theme['background-basic-color-1'],
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        borderRadius: '100%',
    },
    filterContainer: {
        padding: 10,
    },
    button: {
        marginVertical: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 12,
    },
});