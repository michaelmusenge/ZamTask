import { Colors } from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

interface Props {
  name: string;
  category: string;
  image: any;
  location: string;
  salary: string;
  tags: string[];
  rating?: number;
  status: string;
  type: string;
  rightAction?: React.ReactNode;
}

export default function ServiceAvailabilityCard({
  name,
  category,
  image,
  location,
  salary,
  tags,
  rating,
  status,
  type,
  rightAction,
}: Props) {
  const statusColor =
    status === "Available for work" || status === "Accepting requests"
      ? Colors.light.success
      : Colors.textSecondary;

  return (
    <View style={styles.row}>
      <Image source={image} style={type === "provider" ? styles.profile : styles.avatar} />
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{name}</Text>
        </View>

        <Text style={styles.category} numberOfLines={1}>
          {category} • {salary}
        </Text>

        <View style={styles.locRow}>
          <MapPinIcon size={14} color={Colors.textSecondary} />
          <Text style={styles.loc} numberOfLines={1}>
            {location}
          </Text>
        </View>

        <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>

      <View style={styles.action}>
        <Text>
          {rating !== undefined && (
            <View style={styles.ratingRow}>
              <StarIcon size={12} color="#fbbf24" />
              <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
            </View>
          )}
        </Text>
        {rightAction}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    backgroundColor: Colors.card,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderColor: "#EEF2F7",
  },
  profile: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  avatar: {
    width: 46,
    height: 46,
  },
  content: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "700",
    color: Colors.textPrimary,
    flex: 1,
    marginRight: 8,
  },
  category: {
    marginTop: 2,
    color: Colors.textSecondary,
  },
  locRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  loc: {
    color: Colors.textSecondary,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  ratingText: {
    color: Colors.textPrimary,
    fontWeight: "600",
    fontSize: 12,
  },
  statusBadge: {
    marginTop: 6,
    alignSelf: "flex-start",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  action: {
    paddingLeft: 8,
  },
});
