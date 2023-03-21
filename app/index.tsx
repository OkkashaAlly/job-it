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
          <Welcome />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
