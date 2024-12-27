import { View, ViewProps } from "react-native"

export type TodolistContainerProps = {

} & ViewProps

export function TodolistContainer({ children, ...rest }: TodolistContainerProps) {
  return (
    <View className="w-full p-4" {...rest}>
      {children}
    </View>
  )
}