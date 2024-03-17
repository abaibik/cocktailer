import Root from "./root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages//Home";
import SearchCocktail from "../pages/SearchCocktail";
import AddGlass from "../pages/AddGlass";

export const routesConfig = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cocktails",
        element: <SearchCocktail />,
      },
      {
        path: "addGlass",
        element: <AddGlass />,
      },
    ],
  },
];
