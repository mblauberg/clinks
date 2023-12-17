import React, {useState} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

const HeartIcon = (props) => (
    <Icon {...props} name={props.filled ? 'heart' : 'heart-outline'} />
);

const AddressIcon = (props) => (
    <Icon {...props} name='pin-outline'/>
  );
  
  const ClockIcon = (props) => (
    <Icon {...props} name='clock-outline'/>
  );
  
  const WebIcon = (props) => (
    <Icon {...props} name='globe-outline'/>
  );

export const VenueScreen = ({ navigation }) => {
    const [heartFilled, setHeartFilled] = useState(false);
    
    const navigateBack = () => {
      navigation.goBack();
    };

    const toggleHeart = () => {
        setHeartFilled(!heartFilled);
    };
  
    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );
  
    const HeartAction = () => (
        <TopNavigationAction icon={(props) => <HeartIcon {...props} filled={heartFilled} />} onPress={toggleHeart}/>
    );

    const venueInfo = {
        address: '123 Venue St, City, Country',
        openUntil: '10:00 PM',
        website: 'www.venuewebsite.com',
    };
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation
          title='Venue'
          alignment='center'
          accessoryLeft={BackAction}
          accessoryRight={() => (
            <View style={styles.heartContainer}>
              <HeartAction />
            </View>
          )}
        />
        <Divider/>
        <ScrollView>
            <Layout style={{marginVertical:100}}>
            </Layout>
            <Layout style={styles.headerContainer}>
                <Text category='h1'>VENUE</Text>
                <Text category='s2'>4.5 ★ (200+)</Text>
                <Text category='s2'>$10 Entry Fee</Text>
                <Text category='s2'>800m away</Text>
            </Layout>
            <Divider/>
            <Layout style={styles.bodyContainer}>
                <Layout style={styles.infoContainer}>
                    <AddressIcon style={styles.icon}/>
                    <Text category='s1' style={{marginLeft:16}}>{venueInfo.address}</Text>
                </Layout>
                <Layout style={styles.infoContainer}>
                    <ClockIcon style={styles.icon}/>
                    <Text category='s1' style={{marginLeft:16}}>Open until {venueInfo.openUntil}</Text>
                </Layout>
                <Layout style={styles.infoContainer}>
                    <WebIcon style={styles.icon}/>
                    <Text category='s1' style={{marginLeft:16}}>{venueInfo.website}</Text>
                </Layout>
            </Layout>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    heartContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 8,
    },
    bodyContainer: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 24,
    },
    infoContainer: {
        height: 80,
        flexDirection: 'row', 
        alignItems: 'center',
    },
    icon: {
        marginRight: 32,
    },
  });