import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Header from "./components/Header";
import { handleErrorMessage } from "../../utils/helpers";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { showTechniciant } from "../../apis/technician";
import { setUserDisplay } from "../../redux/slices/authSlice";
const key = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImFlMDgxYTk2OWM4NDRiMTI5Mjg2NmYxOTM0ZWFkYzBkIiwiaCI6Im11cm11cjY0In0="
// const ORS_API_KEY = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${key}&start=105.804817,21.028511&end=106.700806,10.776889`;
const ORS_API_KEY = `eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImFlMDgxYTk2OWM4NDRiMTI5Mjg2NmYxOTM0ZWFkYzBkIiwiaCI6Im11cm11cjY0In0=`;


const MapScreen = () => {
  const { user } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch()
  const [routeCoords, setRouteCoords] = useState<any[]>([])
  const [origin] = useState({
    latitude: 21.028511,   // ví dụ: Hà Nội
    longitude: 105.804817,
  });

  const [destination] = useState({
    latitude: 21.035761,
    longitude: 105.835120,
  });
  useEffect(() => {
    getUserDisplay();
    fetchRoute();
  }, [])
  const fetchRoute = async () => {
    try {
      const response = await fetch("https://api.openrouteservice.org/v2/directions/driving-car", {
        method: "POST",
        headers: {
          "Authorization":ORS_API_KEY, // key bạn đã có
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coordinates: [
            [origin.longitude, origin.latitude],
            [destination.longitude, destination.latitude],
          ],
          format: "geojson", // để trả về toạ độ luôn
        }),
      });
console.log(1111111,response.json());

      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const coords = data.features[0].geometry.coordinates.map((c: number[]) => ({
          latitude: c[1],
          longitude: c[0],
        }));
        setRouteCoords(coords);
      }
    } catch (error) {
      console.error("Error fetching route:", error);
    }
  };
  useEffect(() => {
    // quản lý 
    if (user.position_id == 1) {

    }
  }, [user.position_id])
  const getUserDisplay = async () => {
    try {
      const res = await showTechniciant(user.id)
      if (res.status == 200) {
        dispatch(setUserDisplay(res.data?.data))
      }
    } catch (error) {
      handleErrorMessage(error)
    }
  }
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
        {routeCoords.length > 0 && (
          <Polyline
            coordinates={routeCoords}
            strokeColor="blue"
            strokeWidth={5}
          />
        )}
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
