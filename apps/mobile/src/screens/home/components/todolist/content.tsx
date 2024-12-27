import { View, ViewProps } from "react-native";

export type TodolistContentProps = {} & ViewProps;

export function TodolistContent({ children, ...rest }: TodolistContentProps) {
  return (
    <View className="mb-4 flex-row items-center gap-4" {...rest}>
      {children}
    </View>
  );
}
