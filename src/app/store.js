import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// async function clickHandler() {
//   const url = "https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
//       "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     setError(true);
//   }
// }
