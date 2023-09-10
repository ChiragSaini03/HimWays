import { View, Text, StyleSheet, Platform } from "react-native";
import MapView from "react-native-maps";
import React from "react";

const Track = () => {
  return (
    <View style={styles.container}>
      <Text>Track</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 28.61000095218192,
          longitude: 77.03797129324518,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
      />
    </View>
  );
};

// 28.61000095218192, 77.03797129324518

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Track;
