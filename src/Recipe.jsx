import React from "react";

const Recipe = ({ recipe: { recipe } }) => {
  return (
    <div className="recipe">
      <h1>
        <a href={recipe.url} target="_blank" rel="noopener noreferrer">
          {recipe.label}
        </a>
      </h1>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li>
            <em>{ingredient.text}</em>
          </li>
        ))}
      </ul>
      <p>
        <b>Calories: {Math.floor(recipe.calories)}</b>
      </p>
      <img className="image" src={recipe.image} alt="" />
    </div>
  );
};

export default Recipe;
