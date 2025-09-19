import { Colors } from "@/constants/Colors";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { BookmarkIcon, MapPinIcon } from "react-native-heroicons/outline";

interface Props {
  image: ImageSourcePropType;
  title: string;
  category: string;
  location: string;
  salary: number;
  tags?: string[];
  highlighted?: boolean;
}

function Tag({
  text,
  highlighted = true,
}: {
  text: string;
  highlighted?: boolean;
}) {
  return (
    <View
      style={[styles.tag, highlighted ? styles.tagOnDark : styles.tagOnLight]}
    >
      <Text
        style={[
          styles.tagText,
          highlighted ? styles.tagTextOnDark : styles.tagTextOnLight,
        ]}
      >
        {text}
      </Text>
    </View>
  );
}

export default function JobCard({
  image,
  title,
  category,
  location,
  salary,
  tags = [],
  highlighted = true,
}: Props) {
  const onDark = highlighted;

  return (
    <View
      style={[styles.card, highlighted ? styles.cardPrimary : styles.cardPlain]}
    >
      {/* top row: [logo + (title & location)] ..... [bookmark] */}
      <View style={styles.topRow}>
        <View style={styles.leftCluster}>
          <View style={styles.logoBubble}>
            <Image source={image} style={styles.logoImg} resizeMode="contain" />
          </View>

          <View style={styles.titleWrap}>
            <Text
              style={[styles.title, onDark && styles.titleOnDark]}
              numberOfLines={1}
            >
              {title}
            </Text>
            <View>
              <Text
                style={[styles.category, onDark && styles.categoryOnDark]}
                numberOfLines={1}
              >
                {category}
              </Text>
            </View>

            <View style={styles.locationRow}>
              <MapPinIcon
                size={14}
                color={
                  onDark ? "rgba(255,255,255,0.95)" : Colors.light.iconMuted
                }
              />
              <Text
                style={[styles.location, onDark && styles.locationOnDark]}
                numberOfLines={1}
              >
                {location}
              </Text>
            </View>
          </View>
        </View>

        <BookmarkIcon
          size={20}
          color={onDark ? "#fff" : Colors.light.iconMuted}
        />
      </View>

      <View style={styles.bottomRow}>
        <View style={styles.tagsRow}>
          {tags.map((t) => (
            <Tag key={t} text={t} highlighted={highlighted} />
          ))}
        </View>

        <View style={styles.salaryRow}>
          <Text style={[styles.salary, onDark && styles.salaryOnDark]}>
            ${salary}
          </Text>
          <Text style={[styles.per, onDark && styles.perOnDark]}>/Month</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 288, // very close to your screenshot width
    borderRadius: 14,
    padding: 16,
    marginRight: 8,
    // iOS shadow
    shadowColor: "#4a4949ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    // Android shadow
    elevation: 4,
  },
  cardPrimary: { backgroundColor: Colors.light.primary },
  cardPlain: {
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: "#EEF2F7",
  },

  /* TOP */
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftCluster: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    minWidth: 0, // allow text to ellipsize rather than push icons
  },
  logoBubble: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImg: { width: 22, height: 22 },

  titleWrap: { marginLeft: 12, flex: 1, minWidth: 0 },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.light.chipText,
  },
  titleOnDark: { color: "#fff" },

  category: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.light.secondary,
  },
  categoryOnDark: { color: "rgba(255,255,255,0.95)" },

  locationRow: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  location: { fontSize: 12, color: Colors.light.secondary, marginLeft: 4 },
  locationOnDark: { color: "rgba(255,255,255,0.95)" },

  /* BOTTOM */
  bottomRow: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // left side (tags)
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: 180,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 6,
  },
  tagOnDark: { backgroundColor: "rgba(255,255,255,0.18)" },
  tagOnLight: { backgroundColor: "#EEF2F7" },
  tagText: { fontSize: 12, fontWeight: "600" },
  tagTextOnDark: { color: "#fff" },
  tagTextOnLight: { color: Colors.light.primary },

  // right side (salary)
  salaryRow: { flexDirection: "row", alignItems: "flex-end" },
  salary: { fontSize: 20, fontWeight: "800", color: Colors.light.primary },
  salaryOnDark: { color: "#fff" },
  per: {
    marginLeft: 4,
    fontSize: 12,
    color: Colors.light.primary,
    opacity: 0.95,
  },
  perOnDark: { color: "#fff", opacity: 0.95 },
});
