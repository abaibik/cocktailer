import { useRouteError } from "react-router-dom";
import "../index.css";
import lottiePlayer from "@lottiefiles/lottie-player";
import { Container } from "semantic-ui-react";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <h1>Oops!</h1>
      <lottiePlayer
        src="https://assets1.lottiefiles.com/packages/lf20_6s5vkp2g.json"
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        loop
        controls
        autoplay
      ></lottiePlayer>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Container>
  );
}
