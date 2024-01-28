import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

const VenueCard = ({ navigation }) => {
  const name = "Venue";
  const rating = "4.5 ★ (200+)";
  const price = "No Entry Fee";
  const image = require("../../assets/bar.png");
  const distance = "1.2 km";
  const type = "Bar";
  const navigateVenue = () => {
    navigation.navigate("Venue");
  };

  return (
    <TouchableOpacity onPress={navigateVenue}>
      <Layout style={styles.container}>
        <Image
          style={styles.image}
          source={
            image
          }
        />
        <Text category="h5">{name}</Text>
        <Layout style={styles.infoContainer}>
          <Text category="s1">{distance} • {type} • {price}</Text>
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
