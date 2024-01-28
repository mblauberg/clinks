import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Layout, TopNavigation, useTheme } from "@ui-kitten/components";
import PromoPager from "../components/PromoPager";
import VenueCard from "../components/VenueCard";
import SearchBar from "../components/SearchBar";

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

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation alignment="center" accessoryRight={() => <SearchBar />} />
      <ScrollView style={styles.scrollContainer}>
        <Layout style={{ flex: 1 }}>
          <PromoPager data={promos} />
          <VenueCard navigation={navigation} />
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
