import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import ExtendedImage from "./XImg";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./Styles";
import Weather from "./Weather";
import SnowReportSnippet from "./SnowReportSnippet";
import SnowCams from "./SnowCams";

const Home = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <>
      <StatusBar style={scrollPosition > 30 ? "dark" : "light"} />
      <View
        style={{
          backgroundColor: `rgba(255,255,255,${scrollPosition / 50})`,
          height: 45,
          position: "absolute",
          zIndex: 4,
          top: 0,
          left: 0,
          width: "100%",
        }}
      ></View>
      <ScrollView
        onScroll={(e) => setScrollPosition(e.nativeEvent.contentOffset.y)}
        scrollEventThrottle={32}
      >
        <View style={styles.menuLeft}>
          <TouchableOpacity onPress={() => props.nav.openDrawer()}>
            <Icon name="reorder-three-outline" style={styles.menuIcon}></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.menuRight}>
          <TouchableOpacity onPress={() => props.nav.navigate("Snow Report")}>
            <Icon
              name="snow-outline"
              style={{ ...styles.menuIcon, fontSize: 40 }}
            ></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.homeContainer}>
          <Image
            source={require("../assets/hero.jpg")}
            style={{ height: 400 - scrollPosition * 1, ...styles.heroImage }}
          />
          <Image
            source={require("../assets/pns-logo.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>Snow Brief</Text>
          <SnowReportSnippet nav={props.nav} />
          <Text style={styles.title}>Weather</Text>
          <Weather />
          <Text style={styles.title}>Snow Cams</Text>
          <SnowCams showLinks={true} nav={props.nav} />
          <TouchableOpacity
            onPress={() => {
              throw new Error("Hewwo sentry!");
            }}
          >
            <Text>Trigger an error</Text>
          </TouchableOpacity>
          <Text>{"\n\n\n\n\n"}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
