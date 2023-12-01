import "../index.css";
import { Container, Grid, Header } from "semantic-ui-react";
import ImageCarousel from "./ImageCarousel";

export default function Home() {
  return (
    <Container className="container-styles">
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column width={8} textAlign="left" padded>
            <Header as="h1">Coctailer</Header>
            <p>Welcome to the site with cocktail recipes.</p>
            <p>
              Hier you can find some tasty recipe and improve your bartender
              skills
            </p>
          </Grid.Column>
          <Grid.Column width={4} padded>
            <ImageCarousel />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
