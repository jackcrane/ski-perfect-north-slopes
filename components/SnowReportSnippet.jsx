import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  windsock: {
    transform: [{ rotate: "45deg" }],
    width: 30,
    height: 30,
    fontSize: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  snowbriefItems: {
    flexDirection: "row",
  },
  snowbriefItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "#00E8FC",
    borderWidth: 4,
    borderRadius: 10,
    borderStyle: "solid",
    width: 100,
    height: 100,
  },
  snowbriefItemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const SnowReportSnippet = (props) => {
  const [snowbrief, setSnowbrief] = useState({});
  const [snowbriefReady, setSnowbriefReady] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://perfect-north-backend.jackcrane.rocks/`
      );
      const json = await response.json();
      setSnowbrief(json);
      setSnowbriefReady(true);
      // console.log(json)
    })();
  }, []);

  return (
    <>
      <View style={styles.snowbriefItems}>
        <View style={styles.snowbriefItem}>
          <Text style={styles.snowbriefItemTitle}>Open Trails</Text>
          {snowbriefReady ? (
            <>
              <Text style={{ fontSize: 30 }}>
                {snowbrief?.slope_access.open_trails_count}/
                {snowbrief?.slope_access.total_trails_count}
              </Text>
            </>
          ) : (
            <ActivityIndicator size="large" />
          )}
        </View>
        <View style={{ ...styles.snowbriefItem, marginHorizontal: 10 }}>
          <Text style={styles.snowbriefItemTitle}>Open Lifts</Text>
          {snowbriefReady ? (
            <>
              <Text style={{ fontSize: 30 }}>
                {Object.values(snowbrief?.chair_lifts).filter((x) => x).length}/
                {Object.values(snowbrief?.chair_lifts).length}
              </Text>
            </>
          ) : (
            <ActivityIndicator size="large" />
          )}
        </View>
        <View style={styles.snowbriefItem}>
          <Text adjustsFontSizeToFit={true} style={styles.snowbriefItemTitle}>
            Tubing
          </Text>
          {snowbriefReady ? (
            <>
              <Text style={{ fontSize: 30 }}>
                {snowbrief?.tubing_park.lanes_open}
              </Text>
              <Text>Lanes</Text>
            </>
          ) : (
            <ActivityIndicator size="large" />
          )}
        </View>
      </View>
      <TouchableOpacity onPress={() => props.nav.navigate("Snow Report")}>
        <Text>Click to view a more detailed snow report</Text>
      </TouchableOpacity>
    </>
  );
};

export default SnowReportSnippet;
