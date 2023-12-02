import "../index.css";
import { Container, Grid, Header } from "semantic-ui-react";
import ImageCarousel from "./ImageCarousel";

export default function Home() {
  return (
    <Container className="container-styles">
      <Header as="h1">Coctailer</Header>
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column width={8} textAlign="left" padded>
            <p>Welcome to the site with cocktail recipes.</p>

            <p>
              Whether you're a seasoned bartender or a curious enthusiast,
              there's a drink waiting just for you.
            </p>
            <p>
              Find Your Perfect Pour Search with ease! Looking for a specific
              cocktail? Type its name into our search bar. Craving something
              with a particular ingredient? Discover a world of possibilities by
              exploring cocktails based on your preferred spirits, flavors, and
              more.
            </p>
            <p>
              Elevate Your Mixology Skills Become the maestro of your home bar.
              Our detailed recipes provide step-by-step instructions, ensuring
              every pour is a triumph. Explore tips, tricks, and techniques to
              perfect your cocktail crafting skills. From the basics to advanced
              mixology, we've got you covered.
            </p>
            <p>
              Cheers to Innovation Experience the joy of experimentation with
              our innovative features. Let our random cocktail generator
              surprise your taste buds, and discover new horizons with our
              curated collections and themed playlists.
            </p>
            <p>
              Elevate your cocktail game and impress your guests with the latest
              trends and techniques. Let the adventure begin, and let the
              glasses clink in celebration of the extraordinary flavors that
              await you. Cheers to a world of endless possibilities!
            </p>
          </Grid.Column>
          <Grid.Column width={6} padded>
            <ImageCarousel />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
