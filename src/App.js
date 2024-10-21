import React, { useState, useEffect } from "react";

import RecipeList from "./RecipeList";
import RecipeCreate from "./RecipeCreate";
import recipeData from "./data";

function App() {
  const [recipes, setRecipes] = useState(recipeData);

  useEffect (() => {
    console.log("Recipes:", recipes);
  }, [recipes]);

  const handleDelete = (indexToDelete) => {
    setRecipes(recipes.filter((recipe, index) => index !== indexToDelete));
  }

  return (
    <main className="container">
      <header className="bg-primary bg-gradient text-white rounded-bottom">
        <h1 className="text-center py-5 display-5">Delicious Food Recipes</h1>
      </header>      
      <RecipeList recipes={recipes} handleDelete={handleDelete} />      
      <RecipeCreate setRecipes={setRecipes} />      
    </main>
  );
}

export default App;
