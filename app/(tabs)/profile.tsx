import { Screen } from "@/components/Screen";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PaperAirplaneIcon, PencilIcon, StarIcon } from "react-native-heroicons/solid";

export default function ProfileScreen() {
  const { id } = useLocalSearchParams();

  const user = {
    id,
    name: "Mary Banda",
    image: require("@/assets/images/profiles/female-placeholder.png"),
    location: "Lusaka, Zambia",
    bio: "Passionate designer focused on creating beautiful, user-friendly interfaces.",
    rating: 4.7,
    jobsCompleted: 25,
    hourlyRate: "$15/h",
    tags: ["Tax", "Web Marketing", "UI/UX Design"],
  };

  const servicesDone = [
    {
      id: "s1",
      serviceName: "Tax Filing",
      clientName: "Michael Musenge",
      clientSkill: "Finance",
      location: "Lusaka, Zambia",
      workType: ["Full-time", "Remote"],
      cost: "$500",
      rating: 4.8,
    },
    {
      id: "s2",
      serviceName: "Logo Design",
      clientName: "James Mwansa",
      clientSkill: "Design",
      location: "Lusaka, Zambia",
      workType: ["One-time", "Remote"],
      cost: "$100",
      rating: 4.7,
    },
    {
      id: "s3",
      serviceName: "Web Development",
      clientName: "Lillian Zulu",
      clientSkill: "Software Dev",
      location: "Ndola, Zambia",
      workType: ["Project-based", "Onsite"],
      cost: "$1500",
      rating: 4.9,
    },
  ];

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Avatar */}
        <Image source={user.image} style={styles.avatar} />

        {/* Name & Info */}
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.location}>{user.location}</Text>

        <View style={styles.ratingRow}>
          <Text style={styles.rating}>⭐ {user.rating.toFixed(1)}</Text>
          <Text style={styles.jobsCompleted}>{user.jobsCompleted} jobs completed</Text>
        </View>

        <Text style={styles.bio}>{user.bio}</Text>
        <Text style={styles.hourlyRate}>Rate: {user.hourlyRate}</Text>

        {/* Tags */}
        <View style={styles.tagsWrap}>
          {user.tags.map((tag, index) => (
            <View key={index} style={styles.tagChip}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.iconBtn}>
            <PaperAirplaneIcon color="#fff" size={16} />
            <Text style={styles.iconBtnText}>Message</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.outlineBtn}>
            <PencilIcon color={Colors.light.primary} size={16} />
            <Text style={styles.outlineBtnText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Services Done */}
        <Text style={styles.sectionTitle}>Services Done</Text>

        <View style={styles.servicesList}>
          {servicesDone.map((service) => (
            <View key={service.id} style={styles.serviceCard}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{service.serviceName}</Text>
                <View style={styles.ratingBadge}>
                  <StarIcon size={12} color="#fbbf24" />
                  <Text style={styles.ratingText}>{service.rating.toFixed(1)}</Text>
                </View>
              </View>

              <Text style={styles.clientInfo}>
                {service.clientName} • <Text style={styles.clientSkill}>{service.clientSkill}</Text>
              </Text>

              <Text style={styles.detailText}>{service.location}</Text>
              <Text style={styles.detailText}>{service.workType.join(" • ")}</Text>
              <Text style={styles.salary}>{service.cost}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.background,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignSelf: "center",
    marginBottom: 16,
  },
  name: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    color: Colors.textPrimary,
  },
  location: {
    fontSize: 16,
    textAlign: "center",
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 12,
  },
  rating: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.light.primary,
  },
  jobsCompleted: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  bio: {
    fontSize: 15,
    color: Colors.textPrimary,
    textAlign: "center",
    marginVertical: 10,
  },
  hourlyRate: {
    textAlign: "center",
    color: Colors.textPrimary,
    fontWeight: "600",
    marginBottom: 12,
  },

  tagsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
    marginBottom: 20,
  },
  tagChip: {
    backgroundColor: Colors.card,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#EEF2F7",
  },
  tagText: {
    color: Colors.textSecondary,
    fontSize: 14,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginBottom: 24,
  },
  iconBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: Colors.light.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  iconBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  outlineBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: Colors.light.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  outlineBtnText: {
    color: Colors.light.primary,
    fontWeight: "600",
    fontSize: 14,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    color: Colors.textPrimary,
  },
  servicesList: {
    gap: 10,
  },
  serviceCard: {
    backgroundColor: Colors.card,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#EEF2F7",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  ratingBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  clientInfo: {
    marginTop: 4,
    color: Colors.textSecondary,
  },
  clientSkill: {
    fontWeight: "600",
    color: Colors.light.primary,
  },
  detailText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  salary: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.light.primary,
  },
 
});