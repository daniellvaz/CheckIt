import { HTMLAttributes } from "react";

export type TodoHeadingProps = {} & HTMLAttributes<HTMLHeadingElement>;

export function TodoHeading({ children, ...props }: TodoHeadingProps) {
  return (
    <h2 className="text-2xl font-bold" {...props}>
      {children}
    </h2>
  );
}
