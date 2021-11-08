import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer data-testid="footer">
    <input
      type="text"
      data-testid="search-input"
      placeholder="Buscar Receita!"
    />
    <Link to="/explorar" data-testid="explore-bottom-btn">Explore</Link>
    <Link to="/bebidas" data-testid="drinks-bottom-btn">Drinks</Link>
    <Link to="/comidas" data-testid="food-bottom-btn">Foods</Link>
  </footer>
);

export default Footer;
