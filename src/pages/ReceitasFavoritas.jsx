import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

const card = (recipe, index) => {
  if (recipe.type === 'comida') {
    return (
      <section key={ recipe.id } className="card" src={ shareIcon }>
        <Link to={ `/comidas/${recipe.id}` }>
          <img
            className="image-card"
            src={ recipe.image }
            alt={ recipe.name }
            data-testid={ `${index}-horizontal-image` }
          />
          <h3 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h3>
        </Link>
        <h5
          data-testid={ `${index}-horizontal-top-text` }
        >
          { `${recipe.area} - ${recipe.category}` }
        </h5>
        <button
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
        >
          <img src={ shareIcon } alt="Compartilhar" />
        </button>
        <FavoriteButton dataTest={ `${index}-horizontal-favorite-btn` } />
      </section>);
  }
  return (
    <section key={ recipe.id } className="card" src={ shareIcon }>
      <Link to={ `/bebidas/${recipe.id}` }>
        <img
          className="image-card"
          src={ recipe.image }
          alt={ recipe.name }
          data-testid={ `${index}-horizontal-image` }
        />
        <h3 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h3>
      </Link>
      <h5
        data-testid={ `${index}-horizontal-top-text` }
      >
        { `${recipe.alcoholicOrNot} ${recipe.category}` }
      </h5>
      <section>
        <button
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
        >
          <img src={ shareIcon } alt="Compartilhar" />
        </button>
        <FavoriteButton dataTest={ `${index}-horizontal-favorite-btn` } />
      </section>
    </section>);
};

const ReceitasFavoritas = () => {
  const localFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  console.log(localFavorites);
  return (
    <main>
      <Header titlePage="Receitas Favoritas" show={ false } />
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      {localFavorites ? localFavorites.map(card) : null}
    </main>
  );
};

export default ReceitasFavoritas;
