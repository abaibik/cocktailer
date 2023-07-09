import "../index.css";
import { Container, Form, Input } from "semantic-ui-react";

export default function SearchCocktail() {
  return (
    <Container>
      <h1>Search cocktail</h1>
      <Form class="ui form">
        <div class="field">
          <label>Search cocktail by name</label>
          <Input
            type="text"
            name="cocktail-name"
            placeholder="Enter cocktail name"
          />
        </div>

        <div class="field">
          <label>Search cocktail by ingredient</label>
          <Input
            type="text"
            name="cocktail-ingredient"
            placeholder="Enter ingredient name"
          />
        </div>

        <button class="ui button" type="submit">
          Search
        </button>
      </Form>
    </Container>
  );
}
