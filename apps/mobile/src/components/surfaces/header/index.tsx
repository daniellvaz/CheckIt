import { Image, View } from "react-native";

export function Header() {
  return (
    <View className="flex h-[20%] items-center justify-center p-4">
      <Image source={require("../../../../assets/vertical.png")} />
    </View>
  );
}
