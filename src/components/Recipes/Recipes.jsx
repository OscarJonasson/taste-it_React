import RecipeCard from '../RecipeCard/RecipeCard';

function Recipes() {
  return (
    <>
      <label htmlFor="search">
        <h3>Search for recipe:</h3>
      </label>
      <input type="text" id="search" name="search" />
      <RecipeCard foodName="Beef" />
    </>
  );
}

export default Recipes;
