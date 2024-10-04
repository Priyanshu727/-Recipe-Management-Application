
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import CreateRecipe from './components/CreateRecipe';
import UpdateRecipe from './components/UpdateRecipe';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/create" element={<CreateRecipe />} />
        <Route path="/recipes/:id/update" element={<UpdateRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
