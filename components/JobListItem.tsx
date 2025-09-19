import { Colors } from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";

interface Props {
  title: string;
  category: string;
  image: any;
  company: string;
  location: string;
  rightAction?: React.ReactNode;
}

export default function JobListItem({
  title,
  category,
  image,
  company,
  location,
  rightAction,
}: Props) {
  return (
    <View style={styles.row}>
      <Image source={image} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.company} numberOfLines={1}>
          {category} • {company}
        </Text>
        <View style={styles.locRow}>
          <MapPinIcon size={14} color={Colors.textSecondary} />
          <Text style={styles.loc} numberOfLines={1}>
            {location}
          </Text>
        </View>
      </View>
      <View style={styles.action}>{rightAction}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    height: 74,
    backgroundColor: Colors.card,
    borderRadius: 14,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderColor: "#EEF2F7",
  },
  avatar: {
    width: 42,
    height: 42,
  },
  content: { flex: 1 },
  title: { fontWeight: "700", color: Colors.textPrimary },
  company: { marginTop: 2, color: Colors.textSecondary },
  locRow: { flexDirection: "row", alignItems: "center", gap: 4, marginTop: 4 },
  loc: { color: Colors.textSecondary },
  action: { paddingLeft: 8 },
});
