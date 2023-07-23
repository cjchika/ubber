import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setDestination } from "../slices/navSlice";
import NavFavourites from "./NavFavourites";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1 `}>
      <Text style={tw`text-center py-5 text-xl`}>Good morning, CJ.</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            minLength={2}
            returnKeyType={"search"}
            styles={toInputBoxStyles}
            placeholder="Where to?"
            debounce={400}
            nearbyPlacesAPI="GooglePlacesSearch"
            fetchDetails={true}
            query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
            enablePoweredByContainer={false}
            onPress={(data, details = null) => {
              const { geometry } = details;
              // console.log(geometry);
              dispatch(
                setDestination({
                  location: geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionCard");
              // dispatch(setDestination(null));
            }}
          />
        </View>
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: { backgroundColor: "white", paddingTop: 20, flex: 0 },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 16,
    fontSize: 18,
  },
  textInputContainer: { paddingHorizontal: 20, paddingBottom: 0 },
});
