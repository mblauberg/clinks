import React, { useState } from "react";
import { Button, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Layout, Text, TopNavigation, useTheme } from "@ui-kitten/components";
import { BackAction } from "../components/BackAction";
import { ThemeContext } from "../theme-context";

export const SettingsScreen = ({ navigation }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const themeContext = React.useContext(ThemeContext);

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        title="Settings"
        alignment="center"
        accessoryLeft={() => BackAction(navigation)}
      />
      <ScrollView style={styles.container}>
        <Layout style={{ flex: 1 }}>
          <Text category="h1">Settings</Text>
          <Button title="Toggle Dark Mode" onPress={themeContext.toggleTheme}/>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

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
