import { Colors } from "@/constants/Colors";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props {
  label: string;
  image: ImageSourcePropType;
  selected?: boolean;
}

export default function CategoryChip({ label, image, selected }: Props) {
  return (
    <View
      style={[
        styles.wrap,
        selected && { borderColor: Colors.light.primary, borderWidth: 2 },
      ]}
    >
      <View
        style={[
          styles.iconBubble,
          selected && { backgroundColor: Colors.light.primary },
        ]}
      >
        <Image source={image} style={styles.img} resizeMode="contain" />
      </View>
      <Text
        style={[
          styles.label,
          selected && { color: Colors.light.primary, fontWeight: "600" },
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 44,
    borderRadius: 22,
    paddingHorizontal: 14,
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: "#EEF2F7",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  iconBubble: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.light.background,
    alignItems: "center",
    justifyContent: "center",
  },
  img: { width: 22, height: 22 },
  label: { fontSize: 16, color: Colors.textPrimary },
});
