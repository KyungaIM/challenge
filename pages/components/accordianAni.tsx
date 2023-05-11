import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/accordionAni.json";

export default function AccordianAnimation() {
  return (
    <Lottie
      loop={1}
      speed={2}
      animationData={lottieJson}
      play
      style={{
        width: 500,
        height: 500,
      }}
      className="mt-[-100px]"
    />
  );
}
