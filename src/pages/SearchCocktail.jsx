import "../index.css";
import { Container, Form, Input } from "semantic-ui-react";

export default function SearchCocktail() {
  return (
    <Container>
      <h1>Search cocktail</h1>
      <Form className="ui form padding-table">
        <div className="ui three column grid">
          <div className="row three column">
            <div className="column">
              <div className="field">
                <label className="label-search-field">
                  Search cocktail by name
                </label>
                <Input
                  type="text"
                  name="cocktail-name"
                  placeholder="Enter cocktail name"
                />
              </div>
            </div>

            <div className="column">
              <h2 className="centered-text">OR</h2>
            </div>

            <div className="column">
              <div className="field">
                <label className="label-search-field">
                  Search cocktail by ingredient
                </label>
                <Input
                  type="text"
                  name="cocktail-ingredient"
                  placeholder="Enter ingredient name"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="three column row">
          <div className="column centered-text">
            <button className="ui button" type="submit">
              Search
            </button>
          </div>
        </div>
      </Form>
    </Container>
  );
}
