import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, ScrollView, RefreshControl } from "react-native";
import { Layout, Text, TopNavigation, useTheme } from "@ui-kitten/components";
import PromoPager from "../components/PromoPager";
import VenueCard from "../components/VenueCard";
import SearchBar from "../components/SearchBar";
import useFetchNearby from "../hooks/useFetchNearby";

const HomeScreen = ({ navigation }) => {
  // Get current theme and create styles with that theme
  const theme = useTheme();
  const styles = createStyles(theme);

  // Set refreshing states for refresh control
  const [refreshing, setRefreshing] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0); 

  // Dummy data for promo pager
  const promos = [
    { image: require("../../assets/venue_1.png"), text: "Promo 1" },
    { image: require("../../assets/club_1.png"), text: "Promo 2" },
    { image: require("../../assets/club_2.png"), text: "Promo 3" },
    { image: require("../../assets/bar.png"), text: "Promo 4" },
  ];

  // Fetch nearby venues hook
  const { venues, errorMsg } = useFetchNearby(refreshTrigger);

  // Handle errors from fetching venues
  if (errorMsg) {
    return <Layout><Text>Error: {errorMsg}</Text></Layout>;
  }

  // Refresh control
  const onRefresh = () => {
    setRefreshing(true);
    setRefreshTrigger(prev => prev + 1); // Update the trigger to re-fetch data
  };

  // Set refreshing to false when data has been fetched
  useEffect(() => {
    if (refreshing) {
      setRefreshing(false);
    }
  }, [venues, errorMsg, refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation alignment="center" accessoryRight={() => <SearchBar />} />
      <ScrollView 
        style={styles.scrollContainer}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
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
