import Lottie from "@rookino/react-lottie-light";
import React from "react";
import loadingAnimation from "../../../public/lottie/loading.json";
const Loading = () => {
  return (
    <Lottie
      options={{
        animationData: loadingAnimation,
        loop: true,
        autoplay: true
      }}
    />
  );
};

export default Loading;
