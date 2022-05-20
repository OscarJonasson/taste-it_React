import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import logo from '../../assets/img/tasteLogo.svg';

const Header = () => {
  return (
    <header>
      <nav>
        <div className={classes.logo}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.linkActive : classes.link
            }
            to="/"
          >
            <img src={logo} alt="fork logo for the site"></img>
          </NavLink>
        </div>
        <ul className={classes.links}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.linkActive : classes.link
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.linkActive : classes.link
              }
              to="/recipes"
            >
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.linkActive : classes.link
              }
              to="/add-new-recipe"
            >
              Add New Recipe
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
