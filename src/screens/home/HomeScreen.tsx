import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native"; // Sửa Text từ react-native
import MapView, { Marker, Polyline } from "react-native-maps";
import Header from "./components/Header";
import { handleErrorMessage } from "../../utils/helpers";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { showTechniciant } from "../../apis/technician";
import { setUserDisplay } from "../../redux/slices/authSlice";
import polyline from '@mapbox/polyline';

const ORS_API_KEY = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImFlMDgxYTk2OWM4NDRiMTI5Mjg2NmYxOTM0ZWFkYzBkIiwiaCI6Im11cm11cjY0In0=";

const MapScreen = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [routeCoords, setRouteCoords] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [origin] = useState({
    latitude: 21.05, // Hồ Tây
    longitude: 105.816667,
  });

  const [destination] = useState({
    latitude: 21.028611, // Hồ Gươm
    longitude: 105.854167,
  });

  const getUserDisplay = async () => {
    try {
      const res = await showTechniciant(user.id);
      if (res.status === 200) {
        dispatch(setUserDisplay(res.data?.data));
      }
    } catch (error) {
      handleErrorMessage(error);
      setError("Không thể lấy thông tin người dùng");
    }
  };

  const fetchRoute = async () => {
    try {
      const response = await fetch("https://api.openrouteservice.org/v2/directions/driving-car", {
        method: "POST",
        headers: {
          Authorization: ORS_API_KEY,
          "Content-Type": "application/json",
          "Accept": "application/json", // Yêu cầu định dạng json
        },
        body: JSON.stringify({
          coordinates: [
            [105.816667, 21.05],        // Hồ Tây
            [105.833333, 21.033333],    // Điểm trung gian
            [105.854167, 21.028611],    // Hồ Gươm
          ],
          format: "geojson", // Sử dụng format json thay vì geojson
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response data:", data);
      if (data.routes && data.routes.length > 0) {
        const encodedGeometry = data.routes[0].geometry;
        const coords = polyline.decode(encodedGeometry).map(([longitude, latitude]) => ({
          latitude,
          longitude,
        }));
        const endPoint = coords.map((item: any) => ({
          latitude: item.longitude,
          longitude: item.latitude,
        }))
        console.log("Decoded routeCoords:", endPoint); // Kiểm tra dữ liệu
        setRouteCoords(endPoint);
      } else {
        setError("Không tìm thấy lộ trình");
      }
    } catch (error) {
      console.error("Error fetching route:", error);
      setError("Lỗi khi lấy dữ liệu lộ trình");

    }
  };
  const displayCoords =  [
    { latitude: 21.050000, longitude: 105.816667 }, // Gần Hồ Tây
    { latitude: 21.040000, longitude: 105.825000 }, // Điểm trung gian 1
    { latitude: 21.035000, longitude: 105.830000 }, // Điểm trung gian 2
    { latitude: 21.028611, longitude: 105.854167 }, // Gần Hồ Gươm
  ];
  useEffect(() => {
    getUserDisplay();
    fetchRoute();
  }, [user.id]); // Chạy khi user.id thay đổi
  return (
    <View style={styles.container}>
      <Header text="Tài khoản" />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: (origin.latitude + destination.latitude) / 2, // Trung bình để bao phủ cả khu vực
          longitude: (origin.longitude + destination.longitude) / 2,
          latitudeDelta: 0.1, // Mở rộng khu vực hiển thị
          longitudeDelta: 0.1,
        }}
      >
        {/* Điểm bắt đầu */}
        <Marker coordinate={origin} title="Hồ Tây" />

        {/* Điểm đến */}
        <Marker coordinate={destination} title="Hồ Gươm" />

        {/* Đường đi */}
        {routeCoords.length > 0 && (
          <Polyline
            coordinates={routeCoords}
            strokeColor="blue"
            strokeWidth={5}
          />
        )}
      </MapView>
      {error && <Text style={styles.errorText}>{error}</Text>}
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
  errorText: {
    position: "absolute",
    bottom: 20,
    left: 20,
    color: "red",
    fontSize: 16,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
});

export default MapScreen;