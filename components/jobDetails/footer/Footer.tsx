import React from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../../../constants";

import styles from "./footer.style";

// ==========================================================
// FOOTER COMPONENT =========================================
// ==========================================================
export default function Footer({ data }: { data: any[] | string }) {
  const url = data[0]?.job_google_link

  return (
    <View style={styles.container}>
      {/* bookmark/like/save job btn */}
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          style={styles.likeBtnImage}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* apply btn  */}
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply now</Text>
      </TouchableOpacity>
    </View>
  );
}
