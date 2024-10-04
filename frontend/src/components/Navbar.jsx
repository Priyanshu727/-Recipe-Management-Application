import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="div flex gap-2">
                    <h1 className="text-white text-2xl font-bold">Recipe </h1>
                    <img src="../../logo.png" alt="" width='30px' />
                </div>

                <div className="space-x-4">
                    <Link
                        to="/"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Home
                    </Link>
                    <Link
                        to="/create"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Create Recipe
                    </Link>
                    <Link
                        to="/recipes"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        View Recipes
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
