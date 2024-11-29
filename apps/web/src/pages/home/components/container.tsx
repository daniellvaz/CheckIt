import { HTMLAttributes } from "react";

export type HomeContainerProps = {} & HTMLAttributes<HTMLElement>;

export function HomeContainer({ children, ...props }: HomeContainerProps) {
  return (
    <main className="m-auto w-full max-w-4xl" {...props}>
      {children}
    </main>
  );
}
