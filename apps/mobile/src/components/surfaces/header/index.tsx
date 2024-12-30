import { Image, View } from "react-native";

export function Header() {
  return (
    <View className="flex h-[30%] items-center justify-center p-4">
      <Image
        width={24}
        height={24}
        source={require("../../../../assets/vertical.svg")}
      />
    </View>
  );
}
