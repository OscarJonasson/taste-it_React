import classes from './Main.module.css';
import background from '../assets/video/main-background.mp4';
import Card from './Card';

const Main = () => {
  return (
    <main>
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
        <a href="#">Browse Recipes</a>
      </div>
      <div className={classes.cards}>
        <Card linkName="All Recipes" />
        <Card linkName="Add Recipes" />
        <Card linkName="BC Helsinki" />
      </div>
    </main>
  );
};

export default Main;
