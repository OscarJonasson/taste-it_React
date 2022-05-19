import classes from './Recipe.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

function Recipe(props) {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:3011/recipe/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={classes.recipe}>
      <div className={classes.recipe__left}>
        <img className={classes.recipe__img} src={data.image} alt={data.name} />
        <img
          className={classes.recipe__imgFlag}
          src={location.state.flag ?? ''}
          alt={`flag of ${data.country}`}
        />
        <h4 className={classes.ingredients__heading}>Ingredients</h4>
        <ul className={classes.recipe__ingredients}>
          {data.ingredients?.map(ingredient => (
            <li key={ingredient.id}>
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
        <Link className={classes.goback} to="/recipes">
          Go back
        </Link>
      </div>
    </div>
  );
}

export default Recipe;
