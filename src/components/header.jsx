import React from 'react';

const Header = (titlePage) => (
  <header>
    <img data-testid="profile-top-btn" alt="profile-icon" />
    <h1 data-testid="page-title">{titlePage}</h1>
    <img alt="search-icon" data-testid="search-top-btn" />
  </header>
);

export default Header;
