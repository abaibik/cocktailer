//import { Container } from "semantic-ui-react";
import { useGetAllItemsQuery } from "../services/index.js";
import Loading from "./Loading.jsx";
import ErrorPage from "./ErrorPage.jsx";

export default function FindCocktail() {
  const {
    data: cocktails,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllItemsQuery();

  if (isLoading) {
    return <Loading />;
  } else if (isSuccess) {
    return cocktails.map((cocktail) => <p>{cocktail.name}</p>);
  } else if (isError) {
    return <ErrorPage />;
  }
}
