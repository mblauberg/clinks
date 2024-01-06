import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { 
  Layout, 
  Input, 
  Button,
  Icon,
  Text,
  ViewPager,
  TopNavigation,
  useTheme,
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

const ViewPagerComponent = ({ data, pageIndex, onPageSelected, styles }) => {
    return (
        <ViewPager 
            style={styles.viewPager}
            selectedIndex={pageIndex}
            onSelect={index => onPageSelected(index)}
        >
            {data.map((item, index) => (
            <Layout key={index} style={styles.page}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.textOverlay}>{item.text}</Text>
            </Layout>
        ))}
      </ViewPager>
    );
  };

export const HomeScreen = ({ navigation}) => {

    const theme = useTheme();
    const styles = createStyles(theme);

    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };
    
    const [pageIndex, setPageIndex] = useState(0);

    const handlePageSelected = (index) => {
        setPageIndex(index);
    };

    const navigateDetails = () => {
        navigation.navigate('Details');
    };

    const navigateVenue = () => {
        navigation.navigate('Venue');
    }

    const promos = [
        { image: require('../../assets/venue_1.png'), text: 'Promo 1' },
        { image: require('../../assets/club_1.png'), text: 'Promo 2' },
        { image: require('../../assets/club_2.png'), text: 'Promo 3' },
        { image: require('../../assets/bar.png'), text: 'Promo 4' },
    ];

    console.log(promos);

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
                <Image source={require('../../assets/venue_2.png')} style={{width: '100%', height: 200, borderRadius:16}} />
                <ViewPagerComponent 
                    data={promos} 
                    pageIndex={pageIndex}
                    onPageSelected={handlePageSelected}
                    styles={styles}
                />
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
    viewPager: {
        flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 192,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textOverlay: {
        zIndex: 1, 
        color: 'white',
        fontSize: 20,
    },
});