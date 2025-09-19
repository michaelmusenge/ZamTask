import { Screen } from "@/components/Screen";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
export default function MessagesScreen() {
    const { id } = useLocalSearchParams();

  return (
    <Screen>
      <Stack.Screen options={{ headerShown: false }} />
      <ThemedView style={styles.container}>
        <Text>{id}</Text>
        <ThemedText type="title" style={{ textAlign: "center", fontSize: 18 }}>This screen is under development and will be ready soon.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
