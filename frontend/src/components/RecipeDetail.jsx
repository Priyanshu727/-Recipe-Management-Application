import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`http://localhost:8082/api/recipes/${id}`);
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };
        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (


        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{recipe.title}</h1>

            <div className="text-lg">
                <h2 className="font-semibold text-gray-700">Ingredients:</h2>
                <p className="text-gray-600">{recipe.ingredients.join(', ')}</p>
            </div>

            <div className="text-lg">
                <h2 className="font-semibold text-gray-700">Instructions:</h2>
                <p className="text-gray-600">{recipe.instructions}</p>
            </div>

            <div className="flex justify-between">
                <Link
                    to="/"
                    className="inline-block bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
                >
                    Back
                </Link>
                <Link
                    to={`/recipes/${recipe._id}/update`}
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Update Recipe
                </Link>
            </div>
        </div>
    );
};

export default RecipeDetail;
