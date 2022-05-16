import classes from './Recipe.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3011/recipe/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={classes.recipe}>
      <div className={classes.recipe__left}>
        <img
          className={classes.recipe__img}
          src={data.image}
          alt={data.name}
        ></img>
        <h4>Ingredients</h4>
        <ul className={classes.recipe__ingredients}>
          {data.ingredients?.map(ingredient => (
            <li>
              {ingredient.amount} of {ingredient.type}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.recipe__right}>
        <h2 className={classes.recipe__heading}>{data.name}</h2>
        <p className={classes.recipe__desc}>{data.description}</p>
        <h4>Preparation</h4>
        <p className={classes.recipe__preparation}>{data.instructions}</p>
      </div>
    </div>
  );
}

export default Recipe;
