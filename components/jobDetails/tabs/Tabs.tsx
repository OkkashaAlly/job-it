import React from "react";
import {
  FlatList,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "./tabs.style";

// =========================================
// TABS COMPONENT ==========================
// =========================================
export default function Tabs({
  tabs,
  activeTab,
  setActiveTab,
}: {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            toggleActiveTab={() => setActiveTab(item)}
          />
        )}
      />
    </View>
  );
}

// EXTENDED COMPONENTS
const TabButton = ({
  name,
  activeTab,
  toggleActiveTab,
}: {
  name: string;
  activeTab: string;
  toggleActiveTab: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity
      // @ts-ignore
      style={styles.btn(name, activeTab)}
      onPress={toggleActiveTab}
    >
      <Text
        // @ts-ignore
        style={styles.btnText(name, activeTab)}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};
