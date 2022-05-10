import classes from './AddNewRecipe.module.css';
function AddNewRecipe() {
  return (
    <form>
      <div className={classes.separator}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className={classes.separator}>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" />
      </div>
      <div className={classes.separator}>
        <label htmlFor="desc">Description</label>
        <textarea name="desc" id="desc" />
      </div>
      <div className={classes.separator}>
        <label htmlFor="image">Image (URL)</label>
        <input type="text" id="image" name="image" />
      </div>
      <div className={classes.separator}>
        <label htmlFor="quantity">Quantity</label>
        <input type="text" id="quantity" name="quantity" />
      </div>
      <div className={classes.separator}>
        <label htmlFor="ingredient">Ingredient</label>
        <input type="text" id="ingredient" name="ingredient" />
      </div>
      <div className={classes.separator}>
        <label htmlFor="instructions">Instructions</label>
        <textarea name="instructions" id="instructions" />
      </div>
      <input type="submit" value="Send" />
    </form>
  );
}

export default AddNewRecipe;
