import React, { useState } from "react";

function RecipeCreate({ setRecipes }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

  const defaultFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(defaultFormState);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      ...formData
    };
    setRecipes((existingRecipes) => [
      ...existingRecipes, newRecipe
    ]);
    console.log("Recipe Submission:", newRecipe);
    setFormData(defaultFormState);
  };
  
  return (
    <section className="mt-3 px-5 bg-body-tertiary">
      <h2>Add a new Recipe</h2>
      <form onSubmit={handleSubmit} name="create">

        <div className="row">          
          <div className="col-4">
            <label htmlFor="name" className="form-label w-100">
              <input name="name" className="form-control" onChange={handleChange} value={formData.name} placeholder="Name"></input>
            </label>
          </div>
          <div className="col-4">
            <label htmlFor="cuisine" className="form-label w-100">
               <input name="cuisine" className="form-control" onChange={handleChange} value={formData.cuisine} placeholder="Cuisine"></input>          
            </label>
          </div>
          <div className="col-4">
            <label htmlFor="photo" className="form-label w-100">
               <input name="photo" className="form-control" onChange={handleChange} value={formData.photo} placeholder="Recipe Image URL"></input>
            </label>          
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <label htmlFor="ingredients" className="form-label w-100">
              <textarea name="ingredients" className="form-control" onChange={handleChange} value={formData.ingredients} placeholder="Ingredients"></textarea>
            </label>
          </div>
          <div className="col-4">
            <label htmlFor="preparation" className="form-label w-100">
              <textarea name="preparation" className="form-control w-100" onChange={handleChange} value={formData.preparation} placeholder="Preparation"></textarea>
            </label>
          </div>
          <div className="col-4">
            <button type="submit" className="btn btn-outline-primary w-100 h-100">Create</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default RecipeCreate;
