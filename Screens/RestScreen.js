import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../Components/SearchBar";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const RestScreen = () => {
  const mapRef = useRef(null); // Ref to access the MapView
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (location && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.00222,
          longitudeDelta: 0.00221,
        },
        1000
      );
    }
  }, [location]);

  let latitude = 37.78825; 
  let longitude = -122.4324; 
  if (location) {
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
  }

  return (
    <>
      <SearchBar />
      <View style={styles.container}>
        <MapView ref={mapRef} style={styles.map}>
          <Marker coordinate={{ latitude, longitude }} />
        </MapView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  map: {
    width: "100%",
    height: "100%",
  },
});

export default RestScreen;
