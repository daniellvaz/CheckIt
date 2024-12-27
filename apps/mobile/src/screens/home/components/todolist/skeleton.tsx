import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import { View } from "react-native";

export function TodoSkeleton() {
  return (
    <MotiView className="flex-1 bg-zinc-950 p-4">
      <View className="w-full items-center justify-center gap-2 p-4">
        <Skeleton height={48} width={48} colors={["#3f6212", "#1a2e05"]} />
        <Skeleton height={32} width={100} />
      </View>
      <View className="mt-2 w-full flex-row items-center justify-center gap-2 p-4">
        <Skeleton height={52} width={200} />
        <Skeleton height={52} width={100} colors={["#3f6212", "#1a2e05"]} />
      </View>
      <View className="mt-8 w-full p-4">
        <Skeleton height={24} width={200} />
        <View className="mt-4 flex-row gap-4">
          <Skeleton height={24} width={24} />
          <Skeleton height={24} width={250} />
        </View>
        <View className="mt-4 flex-row gap-4">
          <Skeleton height={24} width={24} />
          <Skeleton height={24} width={250} />
        </View>
        <View className="mt-4 flex-row gap-4">
          <Skeleton height={24} width={24} />
          <Skeleton height={24} width={250} />
        </View>
      </View>
      <View className="mt-4 w-full p-4">
        <Skeleton height={24} width={200} />
        <View className="mt-4 flex-row gap-4">
          <Skeleton height={24} width={24} />
          <Skeleton height={24} width={250} />
        </View>
        <View className="mt-4 flex-row gap-4">
          <Skeleton height={24} width={24} />
          <Skeleton height={24} width={250} />
        </View>
      </View>
    </MotiView>
  );
}
