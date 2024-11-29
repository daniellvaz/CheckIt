import { HTMLAttributes } from "react";

export type HomeContentProps = {} & HTMLAttributes<HTMLElement>;

export function HomeContent({ children, ...props }: HomeContentProps) {
  return (
    <main className="overflow-y-scroll p-4" {...props}>
      {children}
    </main>
  );
}
