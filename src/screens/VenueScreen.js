/**
 * VenueScreen Component
 * Detailed view of a specific venue with additional information from Google Places API
 * Features: venue details, contact info, hours, favorite functionality
 */

import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Image, View } from "react-native";
import { Divider, Icon, Layout, Text, TopNavigation, useTheme } from "@ui-kitten/components";
import BackAction from "../components/BackAction";
import HeartAction from "../components/HeartAction";
import useFetchPlaceDetails from "../hooks/useFetchDetails";
import { titleCase } from "../utils/stringUtils";
import { getClosingTime } from "../utils/timeUtils";

const AddressIcon = (props) => <Icon {...props} name="pin-outline" />;

const ClockIcon = (props) => <Icon {...props} name="clock-outline" />;

const WebIcon = (props) => <Icon {...props} name="globe-outline" />;

/**
 * VenueScreen Component
 * @param {Object} route - Route object containing venue information from navigation
 * @param {Object} navigation - React Navigation object for screen transitions
 * @returns {React.Component} Detailed venue information screen
 */
const VenueScreen = ({ route, navigation }) => {
  // Get current theme and create styles with that theme
  const theme = useTheme();
  const styles = createStyles(theme);

  // Get already fetched venue data from route params
  const { venueInfo: initialVenueInfo } = route.params;

  // Update venue info with details - MUST be before any conditional returns
  const [venueInfo, setVenueInfo] = React.useState(initialVenueInfo);

  // Fetch venue details hook - MUST be before any conditional returns
  const { placeDetails, errorMsg } = useFetchPlaceDetails(initialVenueInfo.id);

  // Update venue info when place details are loaded
  React.useEffect(() => {
    if (placeDetails) {
      setVenueInfo(prevInfo => ({
        ...prevInfo,
        address: placeDetails.adrFormatAddress ? placeDetails.adrFormatAddress.replace(/,\s*/, ',\n').replace(/<[^>]*>?/gm, '') : null,
        website: placeDetails.websiteUri ? placeDetails.websiteUri.split('?')[0] : null,
        types: Array.isArray(placeDetails.types) ? placeDetails.types : "N/A",
        closingTime: getClosingTime(placeDetails.currentOpeningHours) ? getClosingTime(placeDetails.currentOpeningHours) : null,
      }));
    }
  }, [placeDetails]);

  // Handle errors from fetching venue details - AFTER all hooks
  if (errorMsg) {
    return (
      <SafeAreaView style={styles.screen}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Error loading venue details: {errorMsg}</Text>
        </View>
      </SafeAreaView>
    );
  }
  


  return (
    <SafeAreaView style={styles.screen}>
      <TopNavigation
        alignment="center"
        accessoryLeft={() => BackAction(navigation)}
        accessoryRight=<HeartAction />
      />
      <Divider />
      <ScrollView>
        <Image source={venueInfo.image} style={styles.image} />
        <Layout style={styles.headerContainer}>
          <Text category="h2">{venueInfo.name}</Text>
          {venueInfo.types && <Text category="s1"> {titleCase(venueInfo.types[0])} • {titleCase(venueInfo.types[1])} • {titleCase(venueInfo.types[2])}</Text>}
          <Text category="s2">{venueInfo.rating}</Text>
          <Text category="s2">$10 Entry Fee</Text>
          <Text category="s2">800m away</Text>
        </Layout>
        <Divider />
        <Layout style={styles.bodyContainer}>
          {venueInfo.address && (
            <Layout style={styles.infoContainer}>
              <AddressIcon style={styles.icon} />
              <Text category="s1" style={styles.text}>
                {venueInfo.address}
              </Text>
            </Layout>
          )}
          {venueInfo.closingTime && (
            <Layout style={styles.infoContainer}>
              <ClockIcon style={styles.icon} />
              <Text category="s1" style={styles.text}>
                {venueInfo.closingTime}
              </Text>
            </Layout>
          )}
          {venueInfo.website && (
            <Layout style={styles.infoContainer}>
              <WebIcon style={styles.icon} />
              <Text category="s1" style={styles.text}>
                {venueInfo.website}
              </Text>
            </Layout>
          )}
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VenueScreen;

const createStyles = (theme) => StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme["background-basic-color-1"],  },
  heartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  image: {
    width: "100%",
    height: 192,
  },
  bodyContainer: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  infoContainer: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  icon: {
    marginRight: 32,
  },
  text: {
    flexShrink: 1,
  }
});
