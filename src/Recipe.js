import React from "react";

function Recipe({ recipe, handleDelete, index }) {
    return (
        <tr>
            <td className="align-middle text-center">{ recipe.name }</td>
            <td className="align-middle text-center">{ recipe.cuisine }</td>
            <td>
                <img src={ recipe.photo } alt="" height="200px" className="border border-info border-2" />
            </td>
            <td className="text-start">{ recipe.ingredients }</td>
            <td>{ recipe.preparation }</td>
            <td>
                <button name="delete" className="btn btn-outline-danger mt-3" onClick={() => handleDelete(index)}>Delete Recipe</button>
            </td>
        </tr>    
    )
}

export default Recipe;