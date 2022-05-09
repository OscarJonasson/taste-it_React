import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className={classes.logo}>
          <a href="#">LOGO</a>
        </div>
        <ul className={classes.links}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Recipe</a>
          </li>
          <li>
            <a href="#">add new Recipe</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
