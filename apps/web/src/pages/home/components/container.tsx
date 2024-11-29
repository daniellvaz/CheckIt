import { HTMLAttributes } from "react";

export type HomeContainerProps = {} & HTMLAttributes<HTMLElement>;

export function HomeContainer({ children, ...props }: HomeContainerProps) {
  return (
    <main
      className="m-auto h-[calc(100vh-16rem)] w-full max-w-4xl overflow-y-scroll"
      {...props}
    >
      {children}
    </main>
  );
}
