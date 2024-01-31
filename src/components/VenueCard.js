import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Layout, Text } from "@ui-kitten/components";


const apiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

const VenueCard = ({ venue, navigation }) => {
  // Display image
  const photoReference = venue.photos && venue.photos[0] ? venue.photos[0].name : null;
  const imageUri = photoReference ? `https://places.googleapis.com/v1/${photoReference}/media?key=${apiKey}&maxHeightPx=300`: null;

  // Venue info
  const venueInfo = {
    id: venue.id,
    name: venue.displayName.text || "Unknown",
    image: imageUri ? { uri: imageUri } : require("../../assets/bar.png"),
    rating: (venue.rating || 'N/A') + "★ (" + (venue.userRatingCount || "N/A") + "+)",
    distance: "1.2 km",
    type: venue.primaryTypeDisplayName.text,
  };

  const navigateVenue = () => {
    navigation.navigate("Venue", { venueInfo: venueInfo });
  };

  return (
    <TouchableOpacity onPress={navigateVenue}>
      <Layout style={styles.container}>
        <Image
          style={styles.image}
          source={venueInfo.image}
        />
        <Text category="h5">{venueInfo.name}</Text>
        <Layout style={styles.infoContainer}>
          <Text category="s1">{venueInfo.distance} • {venueInfo.type}</Text>
          <Text category="s1">{venueInfo.rating}</Text>
        </Layout>
      </Layout>
    </TouchableOpacity>
  );
};

export default VenueCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 16,
  },
  image: {
    width: "100%",
    height: 192,
    resizeMode: "cover",
    borderRadius: 16,
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
