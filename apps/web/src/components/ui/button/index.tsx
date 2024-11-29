import { tv, VariantProps } from "tailwind-variants";
import { ButtonHTMLAttributes } from "react";

const buttonVariant = tv({
  base: "h-fit rounded px-4 py-2 transition-colors ",
  variants: {
    variant: {
      default: "bg-lime-500 hover:bg-lime-500/75",
      secondary: "bg-zinc-900 hover:bg-zinc-900/75",
    },
    disabled: {
      true: "bg-zinc-900/50 cursor-not-allowed hover:bg-zinc-900/35 text-zinc-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type ButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariant>;

export function Button({
  children,
  className,
  variant,
  disabled,
}: ButtonProps) {
  return (
    <button className={buttonVariant({ className, variant, disabled })}>
      {children}
    </button>
  );
}
