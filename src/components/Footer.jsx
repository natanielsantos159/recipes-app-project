import React from 'react';

import './Styles/Footer.css';
// import { Link } from 'react-router-dom';

import exploreIcon from '../images/exploreIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const Footer = () => (
  <footer data-testid="footer">
    <a href="/explorar" data-testid="explore-bottom-btn" src={ exploreIcon }>
      <img src={ exploreIcon } alt="explore-icon" />
    </a>
    <a href="/bebidas" data-testid="drinks-bottom-btn" src={ drinkIcon }>
      <img src={ drinkIcon } alt="drinks-icon" />
    </a>
    <a href="/comidas" data-testid="food-bottom-btn" src={ mealIcon }>
      <img src={ mealIcon } alt="food-icon" />
    </a>
  </footer>
);

export default Footer;
