import React, { useContext } from 'react';
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
    setDrinks } = useContext(AppContext);

  const handleClick = async () => {
    const type = document.getElementById('page-title');

    if (filterRadio === 'first-letter' && filterText.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    return type.innerText === 'Comidas'
      ? setFoods(await getFoods(filterRadio, filterText))
      : setDrinks(await getDrinks(filterRadio, filterText));
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
