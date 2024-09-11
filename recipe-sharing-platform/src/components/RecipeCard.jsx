

function RecipeCard({recipe}) {
    const {title, summary, image} = recipe;

    return (
        <div className="flex justify-start gap-2 shadow-lg rounded-lg p-3 w-fit h-fit">
            <img src={image} alt="Recipe image" className="rounded-lg hover:scale-150"/>
            <div>
                <h2>
                    {title}
                </h2>
                <p>{summary}</p>
            </div>
        </div>
    )
}

export default RecipeCard;
