import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Header from "./components/Header";
const key = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImFlMDgxYTk2OWM4NDRiMTI5Mjg2NmYxOTM0ZWFkYzBkIiwiaCI6Im11cm11cjY0In0="
const GOOGLE_MAPS_APIKEY = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${key}&start=105.804817,21.028511&end=106.700806,10.776889`;


const MapScreen = () => {
  const [origin] = useState({
    latitude: 21.028511,   // ví dụ: Hà Nội
    longitude: 105.804817,
  });

  const [destination] = useState({
    latitude: 21.035761,
    longitude: 105.835120,
  });

  return (
    <View style={styles.container}>
       <Header text='Tài khoản' />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* Điểm bắt đầu */}
        <Marker coordinate={origin} title="Điểm bắt đầu" />

        {/* Điểm đến */}
        <Marker coordinate={destination} title="Điểm đến" />

        {/* Đường đi */}
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="blue"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
