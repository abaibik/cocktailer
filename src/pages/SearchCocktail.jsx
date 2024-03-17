import { useState } from "react";
import "../index.css";
import { Container, Form, Input } from "semantic-ui-react";

export default function SearchCocktail() {
  const [cocktailName, setCocktailName] = useState("");
  const [cocktailIngredient, setCocktailIngredient] = useState("");

  const handleNameChange = (e) => {
    setCocktailName(e.target.value);
  };

  const handleIngredientChange = (e) => {
    setCocktailIngredient(e.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Container className="container-styles">
      <h1>Search cocktail</h1>
      <Form onSubmit={handleSubmit} className="ui form padding-table">
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
                  value={cocktailName}
                  onChange={handleNameChange}
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
                  value={cocktailIngredient}
                  onChange={handleIngredientChange}
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
