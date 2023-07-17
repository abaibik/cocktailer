import "../index.css";
import Lottie from "react-lottie";
import animationData from "./animation.json";

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <h1>Loading...</h1>;
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </>
  );
}
