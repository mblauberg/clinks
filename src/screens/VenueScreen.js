import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Image } from "react-native";
import { Divider, Icon, Layout, Text, TopNavigation, useTheme } from "@ui-kitten/components";
import BackAction from "../components/BackAction";
import HeartAction from "../components/HeartAction";
import useFetchDetails from "../hooks/useFetchDetails";
import { titleCase } from "../utils/stringUtils";

const AddressIcon = (props) => <Icon {...props} name="pin-outline" />;

const ClockIcon = (props) => <Icon {...props} name="clock-outline" />;

const WebIcon = (props) => <Icon {...props} name="globe-outline" />;

const VenueScreen = ({ route, navigation }) => {
  // Get current theme and create styles with that theme
  const theme = useTheme();
  const styles = createStyles(theme);

  // Get already fetched venue data from route params
  const { venueInfo: initialVenueInfo } = route.params;

  // Fetch venue details hook
  const { placeDetails, errorMsg } = useFetchDetails(initialVenueInfo.id);

  // Handle errors from fetching venue details
  if (errorMsg) {
    return <View><Text>Error: {errorMsg}</Text></View>;
  }

  // Update venue info with details
  const [venueInfo, setVenueInfo] = React.useState(initialVenueInfo)

  React.useEffect(() => {
    if (placeDetails) {
      setVenueInfo({
        ...venueInfo,
        address: placeDetails.adrFormatAddress ? placeDetails.adrFormatAddress.replace(/<[^>]*>?/gm, '') : "N/A",
        //openUntil: placeDetails.openingHours ? placeDetails.openingHours.periods[0].close.time : "N/A",
        website: placeDetails.websiteUri ? placeDetails.websiteUri : "N/A",
        types: Array.isArray(placeDetails.types) ? placeDetails.types : "N/A",
      });
    }
  }, [placeDetails]);
  


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
        {placeDetails && (
          <Layout style={styles.bodyContainer}>
            <Layout style={styles.infoContainer}>
              <AddressIcon style={styles.icon} />
              <Text category="s1" style={{ marginLeft: 16 }}>
                {venueInfo.address}
              </Text>
            </Layout>
            
            <Layout style={styles.infoContainer}>
              <ClockIcon style={styles.icon} />
              <Text category="s1" style={{ marginLeft: 16 }}>
                Open until {venueInfo.openUntil}
              </Text>
            </Layout>
            <Layout style={styles.infoContainer}>
              <WebIcon style={styles.icon} />
              <Text category="s1" style={{ marginLeft: 16 }}>
                {venueInfo.website}
              </Text>
            </Layout>
          </Layout>
        )}
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
  },
  icon: {
    marginRight: 32,
  },
});
