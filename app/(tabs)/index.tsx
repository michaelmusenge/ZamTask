import CategoryChip from "@/components/CategoryChip";
import JobCard from "@/components/JobCard";
import JobListItem from "@/components/JobListItem";
import { Screen } from "@/components/Screen";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {
  AdjustmentsHorizontalIcon,
  BookmarkIcon,
  MagnifyingGlassIcon
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

const popularJobs = [
  {
    id: "p1",
    image: require("@/assets/images/categories/software-development.png"),
    title: "Web Development",
    category: "Software Development",
    location: "Lusaka, Zambia",
    salary: 1000,
    tags: ["Part time", "Remote"],
    highlighted: true,
  },
  {
    id: "p2",
    image: require("@/assets/images/categories/design-creative.png"),
    title: "Designer",
    category: "Design & Creative",
    location: "Lusaka, Zambia",
    salary: 1100,
    tags: ["Full time"],
    highlighted: false,
  },
  {
    id: "p3",
    image: require("@/assets/images/categories/marketing-sales.png"),
    title: "Digital Marketer",
    category: "Marketing & Sales",
    location: "Lusaka, Zambia",
    salary: 900,
    tags: ["Freelance", "Remote"],
    highlighted: false,
  },
  {
    id: "p4",
    image: require("@/assets/images/categories/accountancy.png"),
    title: "Accountant",
    category: "Finance & Accounting",
    location: "Lusaka, Zambia",
    salary: 1200,
    tags: ["Full time"],
    highlighted: false,
  },
  {
    id: "p5",
    image: require("@/assets/images/categories/home-services.png"),
    title: "Electrician",
    category: "Home Services",
    location: "Lusaka, Zambia",
    salary: 800,
    tags: ["Part time", "Onsite"],
    highlighted: false,
  },
];

const nearbyJobs = [
  {
    id: "n1",
    title: "Senior UI Designer",
    category: "Design & Creative",
    image: require("@/assets/images/categories/design-creative.png"),
    company: "Remote",
    location: "Lusaka, Zambia",
    salary: 0,
  },
  {
    id: "n2",
    title: "Product Manager",
    category: "Marketing & Sales",
    image: require("@/assets/images/categories/marketing-sales.png"),
    company: "Full time, Lusaka",
    location: "Lusaka, Zambia",
    salary: 0,
  },
  {
    id: "n3",
    title: "Web Developer",
    category: "Software Development",
    image: require("@/assets/images/categories/software-development.png"),
    company: "Freelance",
    location: "Lusaka, Zambia",
    salary: 0,
  },
  {
    id: "n4",
    title: "Electrician",
    category: "Home Services",
    image: require("@/assets/images/categories/home-services.png"),
    company: "Onsite",
    location: "Lusaka, Zambia",
    salary: 0,
  },
  {
    id: "n5",
    title: "Accountant",
    category: "Finance & Accounting",
    image: require("@/assets/images/categories/accountancy.png"),
    company: "Full time",
    location: "Lusaka, Zambia",
    salary: 0,
  },
];

export default function HomeScreen() {
  const UserType = "provider";

  return (
    <Screen>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.profileWrap}>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&s",
              }}
              style={styles.avatar}
            />
          </View>

          <View>
            <Text>
              <Link href="/locations">Lusaka</Link>
            </Text>
          </View>
        </View>

        {/* Greeting */}
        <View style={styles.greetingWrap}>
          <Text style={styles.greetingTitle}>
            Hello Mike Musenge <Text style={styles.wave}>👋</Text>
          </Text>
          <Text style={styles.greetingSubtitle}>
            {UserType === "provider"
              ? " Connecting you with the right services"
              : "Grow your business with trusted clients"}
          </Text>
        </View>

        {/* Search */}
        <View style={styles.searchRow}>
          <Link href="/search">
            <View style={styles.searchBox}>
              <MagnifyingGlassIcon size={26} color={Colors.iconMuted} />

              <Text style={styles.searchInput}>Enter your keyword</Text>
              <TouchableOpacity style={styles.filterBtn}>
                <AdjustmentsHorizontalIcon size={20} color={Colors.textMuted} />
              </TouchableOpacity>
            </View>
          </Link>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          {/* Categories */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Most popular services</Text>
            <TouchableOpacity>
              <Text style={styles.link}>Show all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={categories}
            keyExtractor={(i) => i.id}
            renderItem={({ item }) => (
              <CategoryChip image={item.image} label={item.label} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chipsRow}
          />

          {/* Popular cards */}
          <FlatList
            data={popularJobs}
            keyExtractor={(i) => i.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardRow}
            renderItem={({ item }) => (
              <JobCard
                image={item.image}
                title={item.title}
                category={item.category}
                location={item.location}
                salary={item.salary}
                tags={item.tags}
                highlighted={item.highlighted}
              />
            )}
          />

          {/* Nearby */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Nearby services</Text>
            <TouchableOpacity>
              <Text style={styles.link}>Show all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.nearbyWrap}>
            {nearbyJobs.map((job) => (
              <JobListItem
                key={job.id}
                title={job.title}
                image={job.image}
                category={job.category}
                company={job.company}
                location={job.location}
                rightAction={
                  <TouchableOpacity style={styles.moreBtn}>
                    <BookmarkIcon size={18} color={Colors.iconMuted} />
                  </TouchableOpacity>
                }
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
}

const AVATAR = 36;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 18,
    paddingHorizontal: 16,
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
  profileWrap: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    overflow: "hidden",
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
    color: Colors.light.textMuted,
    paddingVertical: 8,
    fontSize: 18,
   },
  filterBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
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
