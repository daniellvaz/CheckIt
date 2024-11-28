import { useState } from "react";
import { Check } from "lucide-react";
import { tv } from "tailwind-variants";

const checkboxVariant = tv({
  base: "flex h-5 w-5 items-center justify-center rounded  bg-zinc-900",
  variants: {
    checked: {
      true: "border border-lime-500",
      false: "border border-zinc-800",
    },
    disabled: {
      true: "cursor-not-allowed",
    },
  },
});

export interface CheckboxProps {
  onChange?: (checked: boolean) => void;
  defaultValue?: boolean;
  disabled?: boolean;
}

export default function Checkbox({
  onChange,
  disabled = false,
  defaultValue = false,
}: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(defaultValue);

  const toggleCheck = () => {
    setChecked(!checked);

    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={toggleCheck}
      className={checkboxVariant({ checked, disabled })}
    >
      {checked && <Check size={14} className="text-lime-500" />}
    </button>
  );
}
