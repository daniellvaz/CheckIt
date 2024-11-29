import Lottie from "lottie-react";

import { animation } from "@/assets/animation.json";

export function Animation() {
  return (
    <Lottie
      autoplay
      loop={false}
      animationData={animation}
      className="h-[120px] w-[120px]"
    />
  );
}
