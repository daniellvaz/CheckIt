import { Text, TouchableOpacityProps, TouchableOpacity } from "react-native";

export type ButtonProps = {} & TouchableOpacityProps;

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="w-1/3 items-center justify-center rounded bg-lime-500 p-2"
      {...rest}
    >
      <Text className="text-zinc-50">{children}</Text>
    </TouchableOpacity>
  );
}
