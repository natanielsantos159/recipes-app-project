import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import getFoods from '../api/meals';
import getDrinks from '../api/drinks';

const SearchBar = () => {
  const {
    filterRadio,
    setFilterRadio,
    filterText,
    setFilterText,
    setFoods,
    setDrinks,
  } = useContext(AppContext);
  const { pathname } = useLocation();
  const history = useHistory();

  const handleClick = () => {
    if (filterRadio === 'first-letter' && filterText.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }

    if (pathname.includes('comidas')) {
      getFoods(filterRadio, filterText)
        .then((response) => {
          setFoods(response);
          if (!response) {
            global
              .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
          } else if (response.length === 1) {
            history.push(`/comidas/${response[0].idMeal}`);
          }
        });
    } else {
      getDrinks(filterRadio, filterText)
        .then((response) => {
          setDrinks(response);
          if (!response) {
            global
              .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
          } else if (response.length === 1) {
            history.push(`/bebidas/${response[0].idDrink}`);
          }
        });
    }
  };

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
        onClick={ async () => handleClick() }
      >
        Buscar
      </button>
    </form>

  );
};

export default SearchBar;
