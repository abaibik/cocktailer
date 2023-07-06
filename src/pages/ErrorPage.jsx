import { useRouteError } from "react-router-dom";
import "../index.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { Container } from "semantic-ui-react";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <div className="ui grid">
        <div className="two column row">
          <div className="column">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </div>

          <div className="column">
            <Player
              src="https://assets1.lottiefiles.com/packages/lf20_6s5vkp2g.json"
              background="transparent"
              speed="1"
              style={{ width: "30rem", height: "30rem", margin: "0" }}
              loop
              controls
              autoplay
            ></Player>
          </div>
        </div>
      </div>
    </Container>
  );
}
