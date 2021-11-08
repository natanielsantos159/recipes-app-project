import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import './Styles/Header.css';

const Header = ({ titlePage }) => {
  const [visible, setVisible] = useState(false);
  return (
    <header>
      <section className="icons-header">
        <Link className="link-icon" to="/perfil">
          <img src={ profileIcon } data-testid="profile-top-btn" alt="profile-icon" />
        </Link>
        <h1 data-testid="page-title">{titlePage}</h1>
        <button type="button" onClick={ () => setVisible(!visible) }>
          <img
            src={ searchIcon }
            alt="search-icon"
            data-testid="search-top-btn"
          />
        </button>
      </section>
      {visible && <SearchBar />}
    </header>
  );
};

Header.propTypes = {
  titlePage: PropTypes.string.isRequired,
};

export default Header;
