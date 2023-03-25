import { Stack, useRouter, useSearchParams } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

import { Company, JobTabs, ScreenHeaderBtn } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hooks/useFetch";

// =====================================================
// JOB DETAILS PAGE COMPONENT ==========================
// =====================================================
export default function JobDetailsPage() {
  const param = useSearchParams();
  const router = useRouter();

  // data
  const { data, loading, error, refetch } = useFetch("job-details", {
    job_id: param.id,
  });

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {}, []);

  // RETURN =========================================
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      {/* header  */}
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              handlePress={() => router.back()}
              dimension="60%"
              iconUrl={icons.left}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              handlePress={() => {}}
              dimension="60%"
              iconUrl={icons.share}
            />
          ),
          headerTitle: "Job Details",
        }}
      />
      {/* body  */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data!.length <= 0 ? (
          <Text>No data</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company
              companyLogo={data![0].employer_logo}
              jobTitle={data![0].job_title}
              companyName={data![0].employer_name}
              companyLocation={data![0].job_country}
            />
            <JobTabs />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
