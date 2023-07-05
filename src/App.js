import "./App.css";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Container className="container-styles">
        <nav></nav>
        <header>
          <h1>Coctailer</h1>
          <p>Welcome to the site with cocktail recipes.</p>
          <p>
            Hier you can find some tasty recipe and improve your bartender
            skills
          </p>
        </header>

        <main></main>

        <footer></footer>
      </Container>
    </div>
  );
}

export default App;
