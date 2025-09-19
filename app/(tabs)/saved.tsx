import BookmarkCard from "@/components/BookmarkCard";
import { Screen } from "@/components/Screen";
import { Colors } from "@/constants/Colors";
import * as Haptics from "expo-haptics";

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

const categories = [
  {
    id: "1",
    label: "Software Development",
    image: require("@/assets/images/categories/software-development.png"),
  },
  {
    id: "2",
    label: "Design & Creative",
    image: require("@/assets/images/categories/design-creative.png"),
  },
  {
    id: "3",
    label: "Writing & Translation",
    image: require("@/assets/images/categories/writing-translation.png"),
  },
  {
    id: "4",
    label: "Marketing & Sales",
    image: require("@/assets/images/categories/marketing-sales.png"),
  },
  {
    id: "5",
    label: "Finance & Accounting",
    image: require("@/assets/images/categories/accountancy.png"),
  },
  {
    id: "6",
    label: "Education & Tutoring",
    image: require("@/assets/images/categories/education.png"),
  },
  {
    id: "7",
    label: "Health & Wellness",
    image: require("@/assets/images/categories/health-wellness.png"),
  },
  {
    id: "8",
    label: "Home Services",
    image: require("@/assets/images/categories/home-services.png"),
  },
  {
    id: "9",
    label: "Photography & Videography",
    image: require("@/assets/images/categories/photography.png"),
  },
  {
    id: "10",
    label: "Miscellaneous Services",
    image: require("@/assets/images/categories/misc.png"),
  },
];

export default function SavedScreen() {
  const availableEntities = useMemo(
    () => [
      {
        id: "u1",
        name: "Mary Banda",
        image: require("@/assets/images/profiles/female-placeholder.png"),
        category: "Design & Creative",
        location: "Lusaka, Zambia",
        tags: ["Freelance", "Remote"],
        rating: 4.7,
        url: "/profile/mary-banda",
        salary: "K 15/h",
        status: "Available for work",
        type: "provider",
      },
      {
        id: "s1",
        name: "Logo Design",
        image: require("@/assets/images/categories/design-creative.png"),
        category: "Design & Creative",
        location: "Lusaka, Zambia",
        tags: ["One-time", "Remote"],
        url: "/services/logo-design",
        salary: "K 100 one-time",
        status: "Accepting requests",
        type: "service",
      },
      {
        id: "u2",
        name: "James Mwansa",
        image: require("@/assets/images/profiles/1683121366070-5ceb7e007a97.jpg"),
        category: "Software Development",
        location: "Lusaka, Zambia",
        tags: ["Full time", "Onsite"],
        rating: 4.9,
        url: "/profile/james-mwansa",
        salary: "K 2,000/month",
        status: "Not available",
        type: "provider",
      },
      {
        id: "s2",
        name: "Web Development",
        image: require("@/assets/images/categories/software-development.png"),
        category: "Software Development",
        location: "Lusaka, Zambia",
        tags: ["Project-based", "Remote"],
        url: "/services/web-development",
        salary: "K 1,500 per project",
        status: "Accepting requests",
        type: "service",
      },
      {
        id: "u3",
        name: "Lillian Zulu",
        image: require("@/assets/images/profiles/female-placeholder-2.png"),
        category: "Finance & Accounting",
        location: "Lusaka, Zambia",
        tags: ["Part time", "Remote"],
        rating: 4.5,
        url: "/profile/lillian-zulu",
        salary: "K 800/month",
        status: "Available for work",
        type: "provider",
      },
      {
        id: "s3",
        name: "Electrical Installation",
        image: require("@/assets/images/categories/home-services.png"),
        category: "Home Services",
        location: "Lusaka, Zambia",
        tags: ["Onsite", "Appointment"],
        url: "/services/electrical-installation",
        salary: "K 250 per job",
        status: "Accepting requests",
        type: "service",
      },
      {
        id: "u4",
        name: "Tiwonge Phiri",
        image: require("@/assets/images/profiles/female-placeholder-3.png"),
        category: "Marketing & Sales",
        location: "Lusaka, Zambia",
        tags: ["Remote", "Commission-based"],
        rating: 4.6,
        url: "/profile/tiwonge-phiri",
        salary: "K 1,200/month",
        status: "Available for work",
        type: "provider",
      },
      {
        id: "s4",
        name: "Digital Marketing Campaign",
        image: require("@/assets/images/categories/marketing-sales.png"),
        category: "Marketing & Sales",
        location: "Lusaka, Zambia",
        tags: ["Remote", "Short-term"],
        url: "/services/digital-marketing",
        salary: "K 500 per campaign",
        status: "Accepting requests",
        type: "service",
      },
      {
        id: "u5",
        name: "Chileshe Mulenga",
        image: require("@/assets/images/profiles/male-placeholder-2.png"),
        category: "Finance & Accounting",
        location: "Lusaka, Zambia",
        tags: ["Full time", "Onsite"],
        rating: 4.2,
        url: "/profile/chileshe-mulenga",
        salary: "K 1,000/month",
        status: "Not available",
        type: "provider",
      },
      {
        id: "s5",
        name: "Tax Filing Assistance",
        image: require("@/assets/images/categories/accountancy.png"),
        category: "Finance & Accounting",
        location: "Lusaka, Zambia",
        tags: ["One-time", "Remote"],
        url: "/services/tax-filing",
        salary: "K 150 fixed",
        status: "Accepting requests",
        type: "service",
      },
    ],
    []
  );

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredEntities = useMemo(() => {
    return availableEntities.filter((item) => {
      const matchesCategory =
        !selectedCategory || item.category === selectedCategory;

      const matchesSearch =
        search.trim() === "" ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory, availableEntities]);

  const [bookmarkedItems, setBookmarkedItems] = useState(filteredEntities);

  const [message, setMessage] = useState("");

  const handleRemove = (id: string) => {
    setBookmarkedItems((prev) => prev.filter((item) => item.id !== id));
    setMessage("Removed from bookmarks");
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>Bookmark</Text>
        </View>
        {/* Search */}
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <MagnifyingGlassIcon size={26} color={Colors.iconMuted} />

            <TextInput
              placeholder="Enter your keyword"
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
        {message && (
          <View style={styles.messageRow}>
            <Text style={styles.message}>{message}</Text>
          </View>
        )}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          {search && (
            <View style={styles.filterHeaderRow}>
              <Text style={styles.resultCount}>
                {filteredEntities.length} result
                {filteredEntities.length !== 1 ? "s" : ""} found
              </Text>

              <TouchableOpacity
                onPress={() => {
                  setSearch("");
                  setSelectedCategory(null);
                }}
                style={styles.clearBtn}
              >
                <Text style={styles.clearBtnText}>Clear Filters</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.nearbyWrap}>
            {bookmarkedItems.map((item) => (
              <BookmarkCard
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                category={item.category}
                location={item.location}
                salary={item.salary}
                tags={item.tags}
                rating={item.rating}
                status={item.status}
                type={item.type}
                onRemove={handleRemove}
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
