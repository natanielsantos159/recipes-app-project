import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import FilterCategorie from './FilterCategorie';
import SearchBar from './SearchBar';
import '../Styles/Header.css';

const Header = ({ titlePage, show }) => {
  const [visible, setVisible] = useState(false);
  return (
    <header>
      <section className="icons-header">
        <Link to="/perfil" className="link-icon">
          <img src={ profileIcon } data-testid="profile-top-btn" alt="profile-icon" />
        </Link>
        <h1 id="page-title" data-testid="page-title">{titlePage}</h1>
        {show
        && (
          <button
            className="search-btn"
            type="button"
            onClick={ () => setVisible(!visible) }
          >
            <img
              src={ searchIcon }
              alt="search-icon"
              data-testid="search-top-btn"
            />
          </button>)}
      </section>
      {visible && <SearchBar />}
      <FilterCategorie />
    </header>
  );
};

Header.propTypes = {
  show: PropTypes.bool,
  titlePage: PropTypes.string.isRequired,
};

Header.defaultProps = {
  show: true,
};

export default Header;
