import { Container } from "semantic-ui-react";
import "../index.css";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Root() {
  const { pathname } = useLocation();
  const homePath = "/";
  const searchCocktailPath = "/cocktails";
  const addGlassPath = "/addGlass";

  return (
    <>
      <Container>
        <div className="container-flex">
          <nav className="sidebar">
            <Link
              className="active item nav-item"
              active={pathname === homePath}
              to={homePath}
            >
              Home
            </Link>
            <Link
              className="active item nav-item"
              active={pathname === searchCocktailPath}
              to={searchCocktailPath}
            >
              Search cocktail
            </Link>
            <Link
              className="active item nav-item"
              active={pathname === addGlassPath}
              to={addGlassPath}
            >
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
