import { Link } from 'react-router-dom';
import classes from './Card.module.css';
function Card(props) {
  return (
    <div className={classes.card}>
      <h3>{props.title}</h3>
      <p className={classes.card__desc}>{props.message}</p>
      <Link to={props.link}>{props.linkName}</Link>
    </div>
  );
}

export default Card;
