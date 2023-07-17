import "../index.css";
import { Container } from "semantic-ui-react";
import ImageCarousel from "./ImageCarousel";

export default function Home() {
  return (
    <Container>
      <div className="container-carousel-flex">
        <div>
          <h1>Coctailer</h1>
          <p>Welcome to the site with cocktail recipes.</p>
          <p>
            Hier you can find some tasty recipe and improve your bartender
            skills
          </p>
        </div>
        <ImageCarousel />
      </div>
    </Container>
  );
}
