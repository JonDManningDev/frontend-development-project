import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, handleDelete }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  const recipeListings = recipes.map((recipe, index) => {
    return (
      <Recipe
        key={index}
        recipe={recipe}
        handleDelete={handleDelete}
        index={index}
      />
    );
  });

  return (
    <section className="mt-3">
      <table className="table table-striped caption-top mb-0">
        <caption>{recipes.length} recipes listed.</caption>
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{recipeListings}</tbody>
      </table>
    </section>
  );
}

export default RecipeList;
