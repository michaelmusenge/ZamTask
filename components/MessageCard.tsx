import { Colors } from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckIcon } from "react-native-heroicons/solid";

interface Props {
  name: string;
  image: any;
  lastMessage: string;
  time: string;
  isRead: boolean;
  unreadCount: number;
  onPress?: () => void;
}

export default function MessageCard({
  name,
  image,
  lastMessage,
  time,
  isRead,
  unreadCount,
  onPress,
}: Props) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Image source={image} style={styles.avatar} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text
            style={[
              styles.message,
              !isRead && styles.unreadMessage,
            ]}
            numberOfLines={1}
          >
            {lastMessage}
          </Text>

          {unreadCount > 0 ? (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{unreadCount}</Text>
            </View>
          ) : (
            <CheckIcon
              size={16}
              color={Colors.light.primary}
              style={{ marginLeft: 4 }}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF2F7",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  time: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  message: {
    flex: 1,
    fontSize: 14,
    color: Colors.textSecondary,
  },
  unreadMessage: {
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  unreadBadge: {
    backgroundColor: Colors.light.primary,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  unreadText: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
});
