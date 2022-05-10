import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className={classes.logo}>
          <Link to="/">TasteIT🍆</Link>
        </div>
        <ul className={classes.links}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/add-new-recipe">Add New Recipe</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
