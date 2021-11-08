import PropTypes from 'prop-types';
import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './Styles/Header.css';

const Header = ({ titlePage }) => (
  <header>
    <img src={ profileIcon } data-testid="profile-top-btn" alt="profile-icon" />
    <h1 data-testid="page-title">{titlePage}</h1>
    <img src={ searchIcon } alt="search-icon" data-testid="search-top-btn" />
  </header>
);

Header.propTypes = {
  titlePage: PropTypes.string.isRequired,
};

export default Header;
