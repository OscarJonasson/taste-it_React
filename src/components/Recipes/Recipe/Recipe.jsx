import classes from './Recipe.module.css';
function Recipe(props) {
  return (
    <div className={classes.recipe}>
      <div className={classes.recipe__left}>
        <img
          className={classes.recipe__img}
          src="https://source.unsplash.com/-YHSwy6uqvk/640x360/"
          alt={props.foodName}
        ></img>
        <h4>Ingredients</h4>
        <ul className={classes.recipe__ingredients}>
          <li>2dl milk</li>
          <li>2dl milk</li>
          <li>2dl milk</li>
        </ul>
      </div>
      <div className={classes.recipe__right}>
        <h2 className={classes.recipe__heading}>{props.foodName}</h2>
        <p className={classes.recipe__desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          perspiciatis blanditiis architecto, voluptatibus eligendi deserunt
          consequatur quod! Tempore modi sapiente nostrum commodi eveniet
          dolorem nisi sit quo? Voluptas, porro atque.
        </p>
        <h4>Preparation</h4>
        <p className={classes.recipe__preparation}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          eius perspiciatis neque animi magni debitis natus deserunt ullam velit
          ducimus voluptas quos ut sed id molestiae maxime possimus accusantium
          voluptatibus, dolorem magnam ex dignissimos! Aperiam eum beatae
          doloremque nostrum quam sed libero quia officiis placeat, vel incidunt
          ex! Illo, deleniti?
        </p>
      </div>
    </div>
  );
}

export default Recipe;
