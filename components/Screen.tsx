// components/Screen.tsx
import { ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Screen = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}) => {
  return <SafeAreaView style={[{ flex: 1, backgroundColor: "white" }, style]}>{children}</SafeAreaView>;
};
