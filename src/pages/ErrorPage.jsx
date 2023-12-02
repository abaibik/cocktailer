import { useRouteError, useNavigate } from "react-router-dom";
import "../index.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { Container, Header } from "semantic-ui-react";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error.data);

  const navigate = useNavigate();
  const goBackHandler = () => navigate(-1);

  return (
    <Container className="container-styles">
      <button onClick={goBackHandler} className="back-button">
        <IoArrowBackCircleSharp style={{ color: "black", fontSize: "2rem" }} />
        <p>Back</p>
      </button>
      <div className="ui stackable grid">
        <div className="two column row">
          <div className="center aligned column">
            <Header as="h1" textAlign="center">
              Oops!
            </Header>
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
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
