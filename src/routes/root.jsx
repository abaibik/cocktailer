import { Container } from "semantic-ui-react";

import { Link, Outlet, useLocation } from "react-router-dom";

export default function Root() {
  const { pathname } = useLocation();
  const homePath = "/";
  //  const detailsPath = "/details";

  return (
    <>
      <div id="sidebar">
        <Container>
          <div className="ui vertical menu">
            <Link
              className="active item"
              active={pathname === homePath}
              to={homePath}
            >
              Home
            </Link>
          </div>
        </Container>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
