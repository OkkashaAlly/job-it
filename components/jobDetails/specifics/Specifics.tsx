import React from "react";
import { Text, View } from "react-native";

import styles from "./specifics.style";

// ==============================================
// SPECIFICS COMPONENT ==========================
// ==============================================
export default function Specifics({
  title,
  data,
}: {
  title: string;
  data: string[];
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {data.map((point, i) => (
          <View key={i} style={styles.pointWrapper}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{point}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
