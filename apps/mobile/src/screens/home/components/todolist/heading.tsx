import { Text, TextProps } from "react-native";

export type TodolistHeadingProps = {} & TextProps;

export function TodolistHeading({ children, ...rest }: TodolistHeadingProps) {
  return (
    <Text className="text-2lg mb-6 font-bold text-zinc-50" {...rest}>
      {children}
    </Text>
  );
}
