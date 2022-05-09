import classes from './Main.module.css';
import background from '../assets/video/main-background.mp4';

const Main = () => {
  return (
    <main>
      <video className={classes.video} autoPlay loop muted>
        <source src={background} type="video/mp4" />
        <p>aosdfkjfadsoijafsd</p>
      </video>
      <p className={classes.cards}>CARDS</p>
    </main>
  );
};

export default Main;
