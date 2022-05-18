import RecipeCard from '../RecipeCard/RecipeCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from './Recipes.module.css';

const Recipes = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3011/recipe')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const inputSearch = e => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className={classes.search}>
        <label className={classes.search__label} htmlFor="search">
          <h3 className={classes.search__heading}>Search for a recipe</h3>
        </label>
        <input
          onChange={inputSearch}
          className={classes.search__input}
          type="text"
          id="search"
          name="search"
        />
      </div>
      <div className={classes.recipeCard__container}>
        {data
          .filter(data => {
            if (search === '' || search.length < 2) {
              return data;
            }
            return data.name.toLowerCase().includes(search.toLowerCase());
          })
          .map(food => {
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
      </div>
    </>
  );
};

export default Recipes;
