import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './RecipeCard.module.css';
function RecipeCard(props) {
  const [flag, setFlag] = useState('');

  axios
    .get(`https://restcountries.com/v3.1/name/${props.country}`)
    .then(res => setFlag(res.data?.[0].flags.svg));

  return (
    <div className={classes.recipeCard}>
      <img
        className={classes.recipeCard__img}
        src={props.image}
        alt={props.foodName}
      ></img>
      <div className={classes.recipeCard__info}>
        <h4>{props.foodName}</h4>
        <p className={classes.recipeCard__desc}>{props.description}</p>
      </div>
      <Link
        className={classes.recipeCard__link}
        to={{ pathname: `${props.link}` }}
        state={{ flag: flag }}
      >
        See More
      </Link>
      <img
        className={classes.recipeCard__flag}
        src={flag}
        alt={`A flag of ${props.country}`}
      ></img>
    </div>
  );
}

export default RecipeCard;
