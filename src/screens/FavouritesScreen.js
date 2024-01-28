import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Layout, Text, TopNavigation, useTheme } from "@ui-kitten/components";
import { BackAction } from "../components/BackAction";

const FavouritesScreen = ({ navigation }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        title="Favourites"
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

export default FavouritesScreen;

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
