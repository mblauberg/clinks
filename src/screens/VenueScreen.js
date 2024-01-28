import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Image } from "react-native";
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
} from "@ui-kitten/components";
import { BackAction } from "../components/BackAction";
import HeartAction from "../components/HeartAction";

const AddressIcon = (props) => <Icon {...props} name="pin-outline" />;

const ClockIcon = (props) => <Icon {...props} name="clock-outline" />;

const WebIcon = (props) => <Icon {...props} name="globe-outline" />;

const VenueScreen = ({ navigation }) => {

  // Dummy data for venue info
  const venueInfo = {
    address: "123 Venue St, City",
    openUntil: "10:00 PM",
    website: "www.venuewebsite.com",
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Venue"
        alignment="center"
        accessoryLeft={() => BackAction(navigation)}
        accessoryRight={<HeartAction />}
      />
      <Divider />
      <ScrollView>
        <Image source={require("../../assets/venue_1.png")} style={styles.image} />
        <Layout style={styles.headerContainer}>
          <Text category="h1">VENUE</Text>
          <Text category="s2">4.5 ★ (200+)</Text>
          <Text category="s2">$10 Entry Fee</Text>
          <Text category="s2">800m away</Text>
        </Layout>
        <Divider />
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default VenueScreen;

const styles = StyleSheet.create({
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
