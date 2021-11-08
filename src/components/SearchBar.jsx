import React from 'react';

const SearchBar = () => (
  <form>
    <input
      type="text"
      data-testid="search-input"
      placeholder="Buscar Receita!"
    />
    <label htmlFor="ingredient">
      Ingrediente:
      <input
        name="filter"
        type="radio"
        id="ingredient"
        value="ingredient"
        data-testid="ingredient-search-radio"
      />
    </label>
    <label htmlFor="name">
      Nome:
      <input
        name="filter"
        type="radio"
        id="name"
        value="name"
        data-testid="name-search-radio"
      />
    </label>
    <label htmlFor="first-letter">
      Primeira Letra:
      <input
        name="filter"
        type="radio"
        id="first-letter"
        value="first-letter"
        data-testid="first-letter-search-radio"
      />
    </label>
    <button
      type="button"
      data-testid="exec-search-btn"
    >
      Buscar
    </button>
  </form>
);

export default SearchBar;
