import { Stack, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import {
  NearbyJobs,
  PopularJobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

import { COLORS, icons, images, SIZES } from "../constants";

export default function App() {
  const router = useRouter();

  const [searchText, setSearchText] = React.useState<string>("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      {/* header  */}
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              handlePress={() => {}}
              dimension="60%"
              iconUrl={icons.menu}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              handlePress={() => {}}
              dimension="100%"
              iconUrl={images.profile}
            />
          ),
          headerTitle: "",
        }}
      />
      {/* body  */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchText={searchText}
            setSearchText={setSearchText}
            handleSearch={() => {
              if (searchText.length > 0) {
                router.push(`/search/${searchText}`);
              }

            }}
           />
          {/* <PopularJobs /> */}
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
