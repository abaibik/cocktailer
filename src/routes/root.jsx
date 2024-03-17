import { Container } from "semantic-ui-react";
import "../index.css";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  const homePath = "/";
  const searchCocktailPath = "/cocktails";
  const addGlassPath = "/addGlass";

  return (
    <>
      <Container>
        <div className="container-flex">
          <nav className="sidebar">
            <Link className="nav-item" to={homePath}>
              Home
            </Link>

            <Link className="nav-item" to={searchCocktailPath}>
              Search cocktail
            </Link>

            <Link className="nav-item" to={addGlassPath}>
              Add glass
            </Link>
          </nav>

          <div id="detail">
            <Outlet />
          </div>
        </div>
      </Container>
    </>
  );
}
