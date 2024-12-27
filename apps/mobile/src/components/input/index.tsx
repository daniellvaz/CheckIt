import { Text, TextInput, TextInputProps, View } from "react-native";
import { Control, useController } from "react-hook-form";

export type InputProps = {
  name: string;
  control: Control<any>;
} & TextInputProps;

export const Input = ({ name, control, defaultValue, ...rest }: InputProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
  });

  return (
    <View className="w-2/3">
      <TextInput
        {...rest}
        value={field.value}
        onChangeText={field.onChange}
        className="w-full rounded border border-zinc-800 bg-zinc-900 px-2 py-4 text-zinc-50 placeholder-zinc-500 focus:border-lime-500"
      />
      {error && <Text className="text-xs text-rose-500">{error.message}</Text>}
    </View>
  );
};
