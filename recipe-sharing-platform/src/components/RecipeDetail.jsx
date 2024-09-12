import { useParams } from "react-router-dom";
import recipes from '../data.json';

function RecipeDetail() {
    const { id } = useParams();
    const {title, summary, image} = recipes.find(recipe => recipe.id === Number(id));

    return (
        <div className="flex justify-start gap-2 shadow-lg rounded-lg p-3 w-full">
            <img src={image} alt="Recipe image" className="rounded-lg hover:scale-110"/>
            <div>
                <h2>
                    {title}
                </h2>
                <p>{summary}</p>
            </div>
        </div>
    )
}

export default RecipeDetail;
