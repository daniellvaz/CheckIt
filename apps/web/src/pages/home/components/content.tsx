import { HTMLAttributes } from "react";

export type HomeContentProps = {} & HTMLAttributes<HTMLElement>;

export function HomeContent({ children, ...props }: HomeContentProps) {
  return (
    <main className="p-4" {...props}>
      {children}
    </main>
  );
}
