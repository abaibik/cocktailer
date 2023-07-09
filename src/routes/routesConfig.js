import Root from "./root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages//Home";
import SearchCocktail from "../pages/SearchCocktail";

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
    ],
  },
];
