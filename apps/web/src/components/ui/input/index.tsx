import { forwardRef, InputHTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

const inputVariant = tv({
  base: "w-full rounded border border-zinc-800 bg-zinc-900 p-2 placeholder:text-zinc-500",
  variants: {
    variant: {
      default: "outline-lime-500",
    },
    hasError: {
      true: "outline-rose-500",
    },
  },
  defaultVariants: {
    variant: "default",
    hasError: false,
  },
});

export type InputProps = {
  error?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariant>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, variant, ...rest }, ref) => (
    <div className="w-full">
      <input
        ref={ref}
        {...rest}
        className={inputVariant({ className, variant, hasError: !!error })}
      />
      {error && <small className="mt-2 text-rose-500">{error}</small>}
    </div>
  )
);
