import { View, Text, StyleSheet, Platform } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React from "react";

const Track = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 28.61000095218192,
          longitude: 77.03797129324518,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
      >
        <Marker coordinate={{ latitude: nsut.lat, longitude: nsut.long }} />
      </MapView>
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

const nsut = {
  lat: 28.61000095218192,
  long: 77.03797129324518,
};

export default Track;
