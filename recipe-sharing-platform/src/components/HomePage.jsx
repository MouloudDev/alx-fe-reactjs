import { useEffect, useState } from "react"
import recipes from '../data.json';
import RecipeCard from "./RecipeCard";

function HomePage() {
    const [data , setData] = useState(null);

    useEffect(() => {
        setData(recipes)
    }, [data])

    if (!data) return <div>Loading...</div>;

    return (
        <div className="grid grid-cols-1 shadow-sm shadow-orange-200 hover:shadow-lg rounded-md p-3 text-base sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map(item => <RecipeCard recipe={item} key={item.id}/>)}
        </div>
    )
}

export default HomePage;
