import MessageCard from "@/components/MessageCard";
import { Screen } from "@/components/Screen";
import { Colors } from "@/constants/Colors";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";

import React, { useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

export default function MessagesScreen() {
  const messages = useMemo(
    () => [
      {
        id: "b8251d66-d65e-47d4-8d17-91a0313bba0c",
        name: "Mary Banda",
        lastMessage: "Hi, I'm available for your project!",
        image: require("@/assets/images/profiles/female-placeholder.png"),
        time: "2h ago",
        isRead: false,
        unreadCount: 2,
      },
      {
        id: "0478a82-8802-4205-b8dd-51b36f7342ads",
        name: "James Mwansa",
        lastMessage: "Let's jump on a call tomorrow.",
        image: require("@/assets/images/profiles/1683121366070-5ceb7e007a97.jpg"),
        time: "5h ago",
        isRead: true,
        unreadCount: 0,
      },
      {
        id: "6d89390-d65e-47d4-8d17-91a0313bba0c",
        name: "Lillian Zulu",
        lastMessage: "Can you send the files again?",
        image: require("@/assets/images/profiles/female-placeholder-2.png"),
        time: "1d ago",
        isRead: false,
        unreadCount: 1,
      },
    ],
    []
  );

  const [search, setSearch] = useState("");
  const router = useRouter();

  const filteredMessages = useMemo(() => {
    return messages.filter(
      (msg) =>
        msg.name.toLowerCase().includes(search.toLowerCase()) ||
        msg.lastMessage.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, messages]);

  const handleRedirect = async (id: string) => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push({ pathname: "/chat/[id]", params: { id } });
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Messages</Text>
        </View>
        {/* Search */}
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <MagnifyingGlassIcon size={26} color={Colors.iconMuted} />

            <TextInput
              placeholder="Search messages"
              placeholderTextColor="grey"
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
              onFocus={async () => {
                await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              }}
            />

            <TouchableOpacity style={styles.filterBtn}>
              <AdjustmentsHorizontalIcon size={20} color={Colors.textMuted} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          {search && (
            <View style={styles.filterHeaderRow}>
              <Text style={styles.resultCount}>
                {filteredMessages.length} result
                {filteredMessages.length !== 1 ? "s" : ""} found
              </Text>

              <TouchableOpacity
                onPress={() => {
                  setSearch("");
                }}
                style={styles.clearBtn}
              >
                <Text style={styles.clearBtnText}>Clear Filters</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.nearbyWrap}>
            {filteredMessages.map((item) => (
              <MessageCard
                key={item.id}
                name={item.name}
                image={item.image}
                lastMessage={item.lastMessage}
                time={item.time}
                isRead={item.isRead}
                unreadCount={item.unreadCount}
                onPress={() => handleRedirect(item.id)}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 18,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  avatar: { width: "100%", height: "100%" },
  greetingWrap: { marginTop: 18 },
  greetingTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  wave: { fontSize: 30 },
  greetingSubtitle: {
    marginTop: 6,
    color: Colors.textSecondary,
    fontSize: 18,
  },

  // Search
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    gap: 10,
    height: 70,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    height: 60,
    backgroundColor: Colors.card,
    borderRadius: 14,
    gap: 12,
    borderWidth: 1,
    borderColor: "#EEF2F7",
  },
  searchInput: {
    flex: 1,
    color: "black",
    paddingVertical: 8,
    fontSize: 18,
  },
  messageRow: {
    marginTop: 12,
    marginBottom: 12,
  },
  message: {
    color: Colors.textSecondary,
    fontSize: 16,
  },
  filterBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  filterHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    paddingHorizontal: 4,
  },

  resultCount: {
    color: Colors.textSecondary,
    fontSize: 18,
  },

  clearBtn: {
    alignSelf: "flex-end",
    marginVertical: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: Colors.light.primary + "20", // light background
  },
  clearBtnText: {
    color: Colors.light.primary,
    fontWeight: "600",
  },

  sectionHeader: {
    marginTop: 22,
    paddingHorizontal: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  link: { color: Colors.light.link, fontWeight: "600" },

  chipsRow: { paddingVertical: 12, gap: 10 },
  cardRow: { paddingVertical: 8, gap: 12 },

  nearbyWrap: { marginTop: 8, gap: 6 },

  moreBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
});
