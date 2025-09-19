// app/(tabs)/_layout.tsx
import { Colors } from "@/constants/Colors";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import * as Haptics from "expo-haptics";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";

// Outline Icons
import {
  BookmarkIcon as BookmarkOutline,
  ChatBubbleOvalLeftIcon as ChatOutline,
  HomeIcon as HomeOutline,
} from "react-native-heroicons/outline";

// Solid Icons
import {
  BookmarkIcon as BookmarkSolid,
  ChatBubbleOvalLeftIcon as ChatSolid,
  HomeIcon as HomeSolid,
  UserCircleIcon as ProfileSolid,
  MagnifyingGlassIcon as SearchIcon,
} from "react-native-heroicons/solid";

// Icon sets
const TAB_ICONS = {
  index: { solid: HomeSolid, outline: HomeOutline },
  saved: { solid: BookmarkSolid, outline: BookmarkOutline },
  search: { solid: SearchIcon, outline: SearchIcon },
  chat: { solid: ChatSolid, outline: ChatOutline },
  profile: { solid: ProfileSolid, outline: ProfileSolid },
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.hidden,
      }}
      tabBar={(props) => <FloatingTabBar {...props} />}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="saved" />
      <Tabs.Screen name="chat" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

function FloatingTabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <>
      <View pointerEvents="box-none" style={styles.wrapper}>
        <BlurView intensity={40} tint="dark" style={styles.pill}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            const isCenter = route.name === "search";
            const routeName = route.name as keyof typeof TAB_ICONS;
            const Icon = isFocused
              ? TAB_ICONS[routeName].solid
              : TAB_ICONS[routeName].outline;

            const onPress = async () => {
              await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name as never);
              }
            };

            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                style={[styles.tabBtn, isCenter && styles.centerBtn]}
                activeOpacity={0.8}
              >
                <Icon
                  size={isCenter ? 32 : 24}
                  color={isFocused ? Colors.light.primary : "#9BA1A6"}
                />
              </TouchableOpacity>
            );
          })}
        </BlurView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  hidden: {
    position: "absolute",
    height: 0,
  },
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 18,
    alignItems: "center",
    zIndex: 999,
  },
  pill: {
    flexDirection: "row",
    backgroundColor: Colors.light.tabBar,
    paddingHorizontal: 18,
    height: 56,
    minWidth: 320,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    overflow: "hidden",
    ...Platform.select({
      android: { elevation: 8 },
    }),
  },
  tabBtn: {
    padding: 10,
    borderRadius: 16,
  },
  centerBtn: {
    padding: 12,
    borderRadius: 32,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#1c1c1e",
    padding: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalCloseButton: {
    height: 40,
    width: 100,
    backgroundColor: "#4F46E5",
    borderRadius: 10,
    alignSelf: "center",
  },
});
