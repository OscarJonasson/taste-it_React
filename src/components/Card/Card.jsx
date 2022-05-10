import { Link } from 'react-router-dom';
import classes from './Card.module.css';
function Card(props) {
  return (
    <div className={classes.card}>
      <h3>Hello</h3>
      <p className={classes.card__desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, tempore
        in ipsum repellat cum suscipit ipsam veniam commodi. Assumenda porro
        magni, placeat obcaecati in aliquam optio nostrum a et quam.
      </p>
      <Link to={props.link}>{props.linkName}</Link>
    </div>
  );
}

export default Card;
