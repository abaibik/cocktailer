import "../index.css";
import { Container } from "semantic-ui-react";
import ImageCarousel from "./ImageCarousel";

export default function Home() {
  return (
    <Container className="container-styles">
      <div className="ui stackable grid">
        <div className="two column row">
          <div className="center aligned column">
            <h1>Coctailer</h1>
            <p>Welcome to the site with cocktail recipes.</p>
            <p>
              Hier you can find some tasty recipe and improve your bartender
              skills
            </p>
          </div>
          <div className="column">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </Container>
  );
}
