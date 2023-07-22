import { View, Text } from "react-native";
import React from "react";
import Map from "../components/Map";
import tw from "tailwind-react-native-classnames";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  );
};

export default MapScreen;
