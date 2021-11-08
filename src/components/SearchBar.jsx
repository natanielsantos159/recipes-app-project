import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import getFoods from '../api/services';

const SearchBar = () => {
  const {
    filterRadio,
    setFilterRadio,
    filterText,
    setFilterText,
    setFoods } = useContext(AppContext);
  return (
    <form>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Buscar Receita!"
        value={ filterText }
        onChange={ ({ target }) => setFilterText(target.value) }
      />
      <label htmlFor="ingredient">
        Ingrediente:
        <input
          name="filter"
          type="radio"
          id="ingredient"
          data-testid="ingredient-search-radio"
          onClick={ ({ target }) => setFilterRadio(target.id) }
        />
      </label>
      <label htmlFor="name">
        Nome:
        <input
          name="filter"
          type="radio"
          id="name"
          data-testid="name-search-radio"
          onClick={ ({ target }) => setFilterRadio(target.id) }
        />
      </label>
      <label htmlFor="first-letter">
        Primeira Letra:
        <input
          name="filter"
          type="radio"
          id="first-letter"
          data-testid="first-letter-search-radio"
          onClick={ ({ target }) => setFilterRadio(target.id) }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ async () => setFoods(await getFoods(filterRadio, filterText)) }
      >
        Buscar
      </button>
    </form>

  );
};

export default SearchBar;
