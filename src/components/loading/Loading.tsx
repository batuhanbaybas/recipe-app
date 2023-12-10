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
      width={300}
      height={300}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default Loading;
