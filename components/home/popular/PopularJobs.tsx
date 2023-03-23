import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS, SIZES } from "../../../constants";
import styles from "./popularJobs.style";

import PopularJobCard from "../../common/cards/popular/PopularJobCard";

// ==================================================
// POPULAR JOB: SECTION COMPONENT ===================
// ==================================================
export default function PopularJobs() {
  const isLoading = false;
  const error = null;

  // RETURN =========================================
  return (
    <View style={styles.container}>
      {/* header  */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PopularJobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      {/* body  */}
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>ERROR</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4]}
            keyExtractor={item => item.toString()}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
}
