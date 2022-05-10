import './App.css';
import Layout from './pages/Layout';
import Home from './components/Home/Home.jsx';
import Recipes from './components/Recipes/Recipes.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddNewRecipe from './components/AddNewRecipe/AddNewRecipe';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="add-new-recipe" element={<AddNewRecipe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
