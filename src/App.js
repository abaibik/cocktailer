import "./index.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from "./routes/routesConfig";

function App() {
  const router = createBrowserRouter(routesConfig);

  return <RouterProvider router={router} />;
}

export default App;
