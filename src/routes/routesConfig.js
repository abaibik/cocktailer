import Root from "./root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages//Home";

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
      //   {
      //     path: "details",
      //     element: <Details />,
      //   },
    ],
  },
];
