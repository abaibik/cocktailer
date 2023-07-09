import { Container } from "semantic-ui-react";

import { Link, Outlet, useLocation } from "react-router-dom";

export default function Root() {
  const { pathname } = useLocation();
  const homePath = "/";
  const searchCocktailPath = "/cocktails";

  return (
    <>
      <div id="sidebar">
        <div className="ui vertical menu">
          <Container>
            <Link
              className="active item"
              active={pathname === homePath}
              to={homePath}
            >
              Home
            </Link>
            <Link
              className="active item"
              active={pathname === searchCocktailPath}
              to={searchCocktailPath}
            >
              Search cocktail
            </Link>
          </Container>
        </div>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
