import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const APP_ID = "041ed5c9";
  const APP_KEY = "e1b048a9ef691219a358d127e8595364";

  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    //Seems to me like a lifeCycle method, which rerenders every time we change something
    const fetchData = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipies(data.hits);
    };
    fetchData();
  }, [query]); //The second parameter decides the times of running this function. If we leave the array empty, it only renders once. If we add a variable, it will run when the value of variable changes

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipies.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.recipe.label} />
        ))}
      </div>
    </div>
  );
}

export default App;
