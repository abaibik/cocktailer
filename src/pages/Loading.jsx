import "../index.css";
import animationData from "./animation.json";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Loading() {
  return (
    <>
      <h1>Loading...</h1>
      <Player
        src={animationData}
        background="transparent"
        speed="1"
        style={{
          width: "20rem",
          height: "20rem",
          margin: "0",
          borderRadius: "2rem",
          padding: "2rem",
        }}
        loop
        controls
        autoplay
      ></Player>
    </>
  );
}
