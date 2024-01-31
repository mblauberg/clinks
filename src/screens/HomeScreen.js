import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Layout, TopNavigation, useTheme } from "@ui-kitten/components";
import PromoPager from "../components/PromoPager";
import VenueCard from "../components/VenueCard";
import SearchBar from "../components/SearchBar";
import useFetchNearby from "../hooks/useFetchNearby";

const HomeScreen = ({ navigation }) => {
  // Get current theme and create styles with that theme
  const theme = useTheme();
  const styles = createStyles(theme);

  // Dummy data for promo pager
  const promos = [
    { image: require("../../assets/venue_1.png"), text: "Promo 1" },
    { image: require("../../assets/club_1.png"), text: "Promo 2" },
    { image: require("../../assets/club_2.png"), text: "Promo 3" },
    { image: require("../../assets/bar.png"), text: "Promo 4" },
  ];

  // Fetch nearby venues hook
  const { venues, errorMsg } = useFetchNearby();

  // Handle errors from fetching venues
  if (errorMsg) {
    return <View><Text>Error: {errorMsg}</Text></View>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation alignment="center" accessoryRight={() => <SearchBar />} />
      <ScrollView style={styles.scrollContainer}>
        <Layout style={{ flex: 1 }}>
          <PromoPager data={promos} />
          {venues && venues.map((venue, index) => (
            <VenueCard key={index}  venue={venue} navigation={navigation}/>
          ))}
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme["background-basic-color-1"],
    },
    scrollContainer: {
      flex: 1,
      paddingHorizontal: 16,
      flexDirection: "column",
      backgroundColor: theme["background-basic-color-1"],
    },
  });
