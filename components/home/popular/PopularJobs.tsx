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
import useFetch from "../../../hooks/useFetch";

// ==================================================
// POPULAR JOB: SECTION COMPONENT ===================
// ==================================================
export default function PopularJobs() {
  const {data, loading, error} = useFetch('search', {
    query: 'React developer',
    num_pages: 1,
  })

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
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>ERROR</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={item => item?.job_id}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
}
