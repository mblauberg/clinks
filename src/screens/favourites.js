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

export const FavouritesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title="Venue"
        alignment="center"
        accessoryLeft={() => BackAction(navigation)}
      />
      <ScrollView style={styles.container}>
        <Layout style={{ flex: 1 }}>
          <Text category="h1">Favourites</Text>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: "column",
  },
});
