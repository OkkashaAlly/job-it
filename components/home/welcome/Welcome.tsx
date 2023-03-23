import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons } from "../../../constants";

import styles from "./welcome.style";

// =========================================================
// WELCOME PAGE COMPONENT ==================================
// =========================================================
export default function Welcome() {
  return (
    <View>
      {/* top  */}
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Okkasha</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      </View>
      {/* search bar  */}
      <SearchBar />
    </View>
  );
}

// EXTENDED COMPONENT ///////////////////////////////
const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      {/* input  */}
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value=""
          placeholder="What are you looking for?"
          onChangeText={() => {}}
        />
      </View>
      {/* button  */}
      <TouchableOpacity style={styles.searchBtn}>
        <Image
          source={icons.search}
          resizeMode="contain"
          // @ts-ignore
          style={styles.searchBtnImage}
        />
      </TouchableOpacity>
    </View>
  );
};
