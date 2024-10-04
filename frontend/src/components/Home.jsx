
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Recipe Management</h1>
            <p className="text-lg mb-6">Manage your recipes</p>
            <Link
                to="/recipes"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
                View Recipes
            </Link>
        </div>
    );
};

export default Home;
