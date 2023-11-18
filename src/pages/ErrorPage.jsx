import { useRouteError } from "react-router-dom";
import "../index.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { Container } from "semantic-ui-react";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error.data);

  return (
    <Container style={{ paddingTop: "5rem" }}>
      <div className="ui stackable grid">
        <div className="two column row">
          <div className="center aligned column">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred:</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </div>

          <div className="column">
            <Player
              src="https://assets1.lottiefiles.com/packages/lf20_6s5vkp2g.json"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "100%", margin: "0" }}
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
