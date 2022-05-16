import RecipeCard from '../RecipeCard/RecipeCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Recipes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3011/recipe')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <label htmlFor="search">
        <h3>Search for recipe:</h3>
      </label>
      <input type="text" id="search" name="search" />
      {data.map(food => {
        return (
          <RecipeCard
            key={food.id}
            link={food.id}
            foodName={food.name}
            description={food.description}
            image={food.image}
            country={food.country}
          />
        );
      })}
    </>
  );
};

export default Recipes;
