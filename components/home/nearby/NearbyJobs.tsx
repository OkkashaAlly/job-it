import { useRouter } from "expo-router";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../constants";

import useFetch from "../../../hooks/useFetch";
import styles from "./nearbyJobs.style";

import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

// ==================================================
// POPULAR JOB: SECTION COMPONENT ===================
// ==================================================
export default function NearbyJobs() {
  const router = useRouter();

  const { data, loading, error } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
  });

  // RETURN =========================================
  return (
    <View style={styles.container}>
      {/* header  */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
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
          data?.map(job => (
            <NearbyJobCard
              key={`nearby-job-${job?.job_id}`}
              job={job}
              handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
}
