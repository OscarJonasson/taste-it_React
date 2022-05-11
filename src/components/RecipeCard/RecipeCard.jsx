import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './RecipeCard.module.css';
function RecipeCard(props) {
  return (
    <div className={classes.recipeCard}>
      <img
        className={classes.recipeCard__img}
        src="https://source.unsplash.com/-YHSwy6uqvk/640x426/"
        alt={props.foodName}
      ></img>
      <h4>{props.foodName}</h4>
      <p className={classes.recipeCard__desc}>{props.description}</p>
      <Link className={classes.recipeCard__link} to={`${props.link}`}>
        See More
      </Link>
    </div>
  );
}

export default RecipeCard;
