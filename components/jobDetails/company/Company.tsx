import React from "react";
import { Image, Text, View } from "react-native";
import { icons } from "../../../constants";
import { isValidImageUrl } from "../../../utils";

import styles from "./company.style";

const Company = ({
  companyLogo,
  companyName,
  companyLocation,
  jobTitle,
}: {
  companyLogo: string;
  companyName: string;
  companyLocation: string;
  jobTitle: string;
}) => {
  return (
    <View style={styles.container}>
      {/* logo  */}
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: isValidImageUrl(companyLogo)
              ? companyLogo
              : "https://via.placeholder.com/150",
          }}
          style={styles.logoImage}
        />
      </View>

      {/* job title  */}
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      {/* company info  */}
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{companyLocation}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
