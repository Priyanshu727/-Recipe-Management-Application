import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('http://localhost:8082/api/recipes');
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };
        fetchRecipes();
    }, []);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Recipe List</h1>

            <div className="flex justify-center mb-6">
                <Link
                    to="/create"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                    Create New Recipe
                </Link>
            </div>

            <ul className="space-y-4">
                {recipes.map(recipe => (
                    <li key={recipe._id} className="bg-gray-100 hover:bg-gray-200 transition duration-300 p-4 rounded shadow-md">
                        <Link to={`/recipes/${recipe._id}`} className="text-lg text-blue-600 hover:underline">
                            {recipe.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default RecipeList;
