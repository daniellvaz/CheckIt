import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export type CheckboxProps = {
  defaultValue?: boolean;
  onChange?: (value: boolean) => void;
  onPress?: (value: any) => void;
};

export function Checkbox({
  defaultValue = false,
  onChange,
  onPress,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(defaultValue);

  const onCheckboxPress = () => {
    setIsChecked(!isChecked);

    if (onChange) {
      onChange(!isChecked);
    }

    if (onPress) {
      onPress(!isChecked);
    }
  };

  return (
    <TouchableOpacity
      onPress={onCheckboxPress}
      className="h-8 w-8 items-center justify-center rounded border border-zinc-800 bg-zinc-900"
    >
      {isChecked && <Feather name="check" size={16} color="#84cc16" />}
    </TouchableOpacity>
  );
}
