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

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
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

  // page refresh
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {}, []);

  // job info tabs
  const tabs = ["About", "Qualifications", "Responsibilities"];
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  // display tab content
  const displayTabContent = (tab: string, data: any) => {
    switch (tab) {
      case "About":
        return <JobAbout info={data.job_description ?? ["No data"]} />;
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            data={data.job_highlights?.Qualifications ?? ["No data"]}
          />
        );
      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            data={data.job_highlights?.Responsibilities ?? ["No data"]}
          />
        );
    }
  };

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
            {/* company info  */}
            <Company
              companyLogo={data![0].employer_logo}
              jobTitle={data![0].job_title}
              companyName={data![0].employer_name}
              companyLocation={data![0].job_country}
            />
            {/* job info  */}
            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {/* display tab content  */}
            {displayTabContent(activeTab, data![0])}
          </View>
        )}
      </ScrollView>

      {/* footer  */}

      <JobFooter data={data! ?? ""} />
    </SafeAreaView>
  );
}
