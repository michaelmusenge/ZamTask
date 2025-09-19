const tintColorLight = "#007A33"; // Green (Zambia Primary)
const tintColorDark = "#FF8200";  // Orange (highlight in dark mode)

export const Colors = {
  textSecondary: "#6B7280",
  textPrimary: "#000000ff",
  card: "#FFFFFF",
  iconMuted: "#D1D5DB",
  textMuted: "#334155",
  background: "#FFFFFF",
  surface: "#F5F6FA",

  light: {
    // Brand colors
    primary: "#007A33",   // Green
    secondary: "#555555ff", // Orange highlight

    // UI foundations
    background: "#FFFFFF",
    surface: "#F5F6FA",
    card: "#FFFFFF",
    tabBar: "#000000", // Black (strong neutral)

    // text
    textPrimary: "#111827",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
    white: "#FFFFFF",

    // lines / chips
    chipBg: "#F1F5F9",
    chipText: "#334155",

    // icons
    iconMuted: "#D1D5DB",

    // specials
    success: "#007A33",   // Green for success
    danger: "#EF3340",    // Red from flag

    // links
    link: "#014a8eff",      // Orange as CTA/link

    // your previous colors (optional, keep if you use them)
    text: "#11181C",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },

  dark: {
    // Brand colors (dark mode adjustments)
    primary: "#007A33",   // Keep green
    secondary: "#FF8200", // Orange pop

    background: "#151718",
    surface: "#1E1E1E",
    card: "#222222",
    tabBar: "#000000", // Deep black footer/tab

    textPrimary: "#ECEDEE",
    textSecondary: "#9CA3AF",
    textMuted: "#6B7280",
    white: "#FFFFFF",

    chipBg: "#334155",
    chipText: "#F1F5F9",

    iconMuted: "#6B7280",

    success: "#007A33",   // Green
    danger: "#EF3340",    // Red

    link: "#FF8200",      // Orange links

    // your previous dark colors (optional)
    text: "#ECEDEE",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
