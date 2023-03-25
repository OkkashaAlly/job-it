import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons, SIZES } from "../../../constants";

import styles from "./welcome.style";

// =============================================================
// WELCOME: SECTION COMPONENT ==================================
// =============================================================
export default function Welcome({
  searchText,
  setSearchText,
  handleSearch,
}: {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}) {
  return (
    <View>
      {/* top  */}
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Okkasha</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      </View>
      {/* search bar  */}
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      />
      {/* search tab  */}
      <SearchJobTab />
    </View>
  );
}

// EXTENDED COMPONENT ///////////////////////////////
const SearchBar = ({
  searchText,
  setSearchText,
  handleSearch,
}: {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}) => {
  return (
    <View style={styles.searchContainer}>
      {/* input  */}
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value={searchText}
          placeholder="What are you looking for?"
          onChangeText={text => setSearchText(text)}
        />
      </View>
      {/* button  */}
      <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
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

const SearchJobTab = () => {
  const router = useRouter();

  const [activeJobType, setActiveJobType] = React.useState("Full Time");
  const jobTypes = ["Full Time", "Part Time", "Freelance", "Internship"];

  return (
    <View style={styles.tabsContainer}>
      <FlatList
        data={jobTypes}
        renderItem={({ item }) => (
          <TouchableOpacity
            // @ts-ignore
            style={styles.tab(activeJobType, item)}
            onPress={() => {
              setActiveJobType(item);
              router.push(`/search/${item}`);
            }}
          >
            {/* @ts-ignore */}
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        horizontal
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small }}
      />
    </View>
  );
};
