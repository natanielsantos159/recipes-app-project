import React from 'react';
import FavoriteButton from '../components/FavoriteButton';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

const ReceitasFavoritas = () => {
  const localFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  console.log(localFavorites);
  return (
    <main>
      <Header titlePage="Receitas Favoritas" show={ false } />
      <button type="button" data-testid="filter-by-all-btn">All</button>
      <button type="button" data-testid="filter-by-food-btn">Food</button>
      <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      {localFavorites ? localFavorites.map((recipe, index) => (
        <section key={ recipe.id }>
          <img
            src={ recipe.image }
            alt={ recipe.name }
            data-testid={ `${index}-horizontal-image` }
          />
          <h3 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h3>
          <h5 data-testid={ `${index}-horizontal-top-text` }>{ recipe.category }</h5>
          <button type="button" data-testid={ `${index}-horizontal-share-btn` }>
            <img src={ shareIcon } alt="Compartilhar" />
          </button>
          <FavoriteButton dataTest={ `${index}-horizontal-favorite-btn` } />
        </section>
      )) : null}
    </main>
  );
};

export default ReceitasFavoritas;
