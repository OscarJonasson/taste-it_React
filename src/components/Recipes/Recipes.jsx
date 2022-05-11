import RecipeCard from '../RecipeCard/RecipeCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Recipes = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    axios
      .get('http://localhost:3011/recipe')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  // console.log('trying to log', data[0]?.name);
  console.log('trying to log', data);

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
          />
        );
      })}
      ;
    </>
  );
};

export default Recipes;
