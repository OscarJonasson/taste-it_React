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
      <p className={classes.recipeCard__desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        nostrum eos ut optio, autem repudiandae quo consequatur accusamus
        numquam dolor dolore distinctio? Illo maxime rem deleniti quas
        voluptates, voluptas iste.
      </p>
      <Link className={classes.recipeCard__link} to={props.foodName}>
        See More
      </Link>
    </div>
  );
}

export default RecipeCard;
