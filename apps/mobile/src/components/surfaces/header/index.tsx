import { View } from "react-native";

import Logo from "../../../../assets/vertical.svg";

export function Header() {
  return (
    <View className="flex h-[30%] items-center justify-center p-4">
      <Logo />
    </View>
  );
}
