import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Layout, Text, TopNavigation, Divider } from "@ui-kitten/components";

const SafetyScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation alignment="center" />
      <Divider />
      <Layout style={safetyStyles.screenContainer}>
        <Text style={safetyStyles.screenText}>Stay safe!!</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default SafetyScreen;

const safetyStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  screenText: {
    fontSize: 20,
  },
});
