import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./popularJobCard.style";

// =====================================================
// POPULAR JOB CARD: COMPONENT ==========================
// =====================================================
const PopularJobCard = ({
  item,
  selectedJob,
  handlePress,
}: {
  item: any;
  selectedJob: string;
  handlePress: (item: any) => void;
}) => (
  <TouchableOpacity
    // @ts-ignore
    style={styles.container(selectedJob, item)}
    onPress={() => handlePress(item)}
  >
    <TouchableOpacity
      // @ts-ignore
      style={styles.logoContainer(selectedJob, item)}
    >
      <Image
        source={{ uri: item?.employer_logo }}
        // @ts-ignore
        style={styles.logoImage}
        resizeMode="contain"
      />
    </TouchableOpacity>
    {/* job info  */}
    <Text style={styles.companyName} numberOfLines={1}>
      {item.employer_name}
    </Text>
    {/* sub info  */}
    <View style={styles.infoContainer}>
      <Text
        // @ts-ignore
        style={styles.jobName(selectedJob, item)}
        numberOfLines={1}
      >
        {item.job_title}
      </Text>
      <Text style={styles.location}>{item.job_country}</Text>
    </View>
  </TouchableOpacity>
);

export default PopularJobCard;
