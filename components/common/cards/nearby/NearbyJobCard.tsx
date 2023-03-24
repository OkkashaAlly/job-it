import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { isValidImageUrl } from "../../../../utils";

import styles from "./nearbyJobCard.style";

// =====================================================
// POPULAR JOB CARD: COMPONENT ==========================
// =====================================================
const NearbyJobCard = ({
  job,
  handleNavigate,
}: {
  job: any;
  handleNavigate: () => void;
}) => (
  <TouchableOpacity style={styles.container} onPress={handleNavigate}>
    <TouchableOpacity style={styles.logoContainer}>
      <Image
        source={{
          uri: isValidImageUrl(job.employer_logo)
            ? job?.employer_logo
            : "https://via.placeholder.com/150",
        }}
        style={styles.logoImage}
        resizeMode="contain"
      />
    </TouchableOpacity>

    {/* sub info  */}
    <View style={styles.textContainer}>
      <Text style={styles.jobName} numberOfLines={1}>
        {job.job_title}
      </Text>
      <Text style={styles.jobType}>{job.job_employment_type}</Text>
    </View>
  </TouchableOpacity>
);

export default NearbyJobCard;
