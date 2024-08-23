import AddToFavoritesButton from "./AddToFavoritesButton";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";
import RemoveFromFavoritesButton from "./RemoveFromFavoritesButton";

const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

    return (
        <div>
            {filteredRecipes.map(recipe => {
                const {id, title, description} = recipe;
                return (
                    <div key={id}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <Link to={`/${id}`}>Details</Link>
                        <AddToFavoritesButton id={id} />
                        <RemoveFromFavoritesButton id={id} />
                    </div>
                )
            })}
        </div>
    );
};

export default RecipeList;
