import classes from './Home.module.css';
import background from '../../assets/video/main-background.mp4';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <video className={classes.video} autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
      <div className={classes.intro}>
        <h1>TasteIT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi,
          architecto. Quia quos facilis aspernatur enim natus in autem commodi
          vero.
        </p>
        <Link to="/recipes">Browse Recipes</Link>
      </div>
      <h2 className={classes.subHead}>Looking for recipes?</h2>
      <div className={classes.cards}>
        <Card linkName="All Recipes" link="/recipes" />
        <Card linkName="Add Recipes" link="/add-new-recipe" />
        <Card linkName="BC Helsinki" link="https://bc.fi" />
      </div>
    </>
  );
};

export default Home;
