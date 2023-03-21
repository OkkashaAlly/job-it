import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "./screenHeader.style";

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  handlePress,
}: {
  iconUrl: string;
  dimension: string;
  handlePress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.btnContainer}>
      <Image
        // @ts-ignore
        source={iconUrl}
        resizeMode="cover"
        // @ts-ignore
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
