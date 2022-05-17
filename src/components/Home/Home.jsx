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
        <h1 className={classes.hero__heading}>TasteIT</h1>
        <p>Your experience with cooking will never be the same again!</p>
        <Link className={classes.hero__link} to="/recipes">
          Browse Recipes
        </Link>
      </div>
      <h2 className={classes.subHead}>Looking for recipes?</h2>
      <div className={classes.cards}>
        <Card
          linkName="All Recipes"
          link="/recipes"
          message="Dive in to the wonderful world of recipes from all over the world."
          title="Browse Recipes"
        />
        <Card
          linkName="Add Recipes"
          link="/add-new-recipe"
          message="Add one of your awesome recipes to the evergrowing list of fantastic culinary experiences."
          title="Feeling frisky?"
        />
        <Card
          linkName="BC Helsinki"
          link="https://www.bc.fi"
          message="See more about the program."
          title="Business College Helsinki"
        />
      </div>
    </>
  );
};

export default Home;
