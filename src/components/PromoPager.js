import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { Layout, Text, ViewPager } from "@ui-kitten/components";

const PromoPager = ({ data }) => {
  const [pageIndex, setPageIndex] = useState(0);

  const handlePageSelected = (index) => {
    setPageIndex(index);
  };

  return (
    <ViewPager
      style={styles.viewPager}
      selectedIndex={pageIndex}
      onSelect={(index) => handlePageSelected(index)}
    >
      {data.map((item, index) => (
        <Layout key={index} style={styles.page}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.textOverlay} category="h3">
            {item.text}
          </Text>
        </Layout>
      ))}
    </ViewPager>
  );
};

export default PromoPager;

const styles = StyleSheet.create({
  viewPager: {},
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 128,
    margin: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
  textOverlay: {
    zIndex: 1,
    color: "white",

    position: "absolute",
    textAlign: "center",
  },
});
