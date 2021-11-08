import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './Styles/Header.css';

const Header = ({ titlePage }) => (
  <header>
    <Link className="link-icon" to="/perfil">
      <img src={ profileIcon } data-testid="profile-top-btn" alt="profile-icon" />
    </Link>
    <h1 data-testid="page-title">{titlePage}</h1>
    <img src={ searchIcon } alt="search-icon" data-testid="search-top-btn" />
  </header>
);

Header.propTypes = {
  titlePage: PropTypes.string.isRequired,
};

export default Header;
