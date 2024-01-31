import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Layout, Text } from "@ui-kitten/components";


const apiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

const VenueCard = ({ venue, navigation }) => {
  // Display image
  const photoReference = venue.photos && venue.photos[0] ? venue.photos[0].name : null;
  const imageUri = photoReference ? `https://places.googleapis.com/v1/${photoReference}/media?key=${apiKey}&maxHeightPx=300`: null;
  const imageSource = imageUri ? { uri: imageUri } : require("../../assets/bar.png");

  // Venue details
  const name = venue.displayName.text || "Unknown";
  const rating = (venue.rating || 'N/A') + "★ (" + (venue.userRatingCount || "N/A") + "+)";
  const distance = "1.2 km";
  const type = venue.primaryTypeDisplayName.text;
  console.log(venue);

  const navigateVenue = () => {
    navigation.navigate("Venue");
  };

  return (
    <TouchableOpacity onPress={navigateVenue}>
      <Layout style={styles.container}>
        <Image
          style={styles.image}
          source={ imageSource }
        />
        <Text category="h5">{name}</Text>
        <Layout style={styles.infoContainer}>
          <Text category="s1">{distance} • {type}</Text>
          <Text category="s1">{rating}</Text>
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
