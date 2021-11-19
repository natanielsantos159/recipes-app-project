import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import '../Styles/Detalhes.css';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import AppContext from '../context/AppContext';
import { fetchMealsById } from '../api/meals';
import { fetchDrinksById } from '../api/drinks';
import FavoriteButton from '../components/FavoriteButton';

const InProgress = () => {
  const { recipeDetail, setRecipeDetail } = useContext(AppContext);
  const { pathname } = useLocation();
  const { id } = useParams();
  const currentRecipe = recipeDetail[0];

  useEffect(() => {
    if (pathname.includes('/comidas')) {
      fetchMealsById(id).then(setRecipeDetail);
    } else {
      fetchDrinksById(id).then(setRecipeDetail);
    }
  }, [setRecipeDetail, id, pathname]);

  const filteredIngredients = () => {
    const filterIngredients = Object.entries(currentRecipe)
      .filter(([key, value]) => key.includes('strIngredient')
      && (value !== '') && (value !== null));

    const filterMeasure = Object.entries(currentRecipe)
      .reduce((acc, [key, value]) => {
        if (key.includes('strMeasure')) {
          if (value === null) {
            acc.push('');
          } else {
            acc.push(value);
          }
        }

        return acc;
      }, []);

    return filterIngredients.map(([key, value], i) => (
      <label
        htmlFor={ i }
        key={ i }
        data-testid={ `${i}-ingredient-step` }
      >
        {`${filterMeasure[i]} ${value}`}
        <input
          id={ i }
          name={ `${filterMeasure[i]} ${value}` }
          type="checkbox"
          key={ key }
        />
      </label>
    ));
  };

  const renderInProgress = () => {
    if (currentRecipe && currentRecipe.strDrink) {
      return (
        <section className="details-container">
          <img
            src={ currentRecipe.strDrinkThumb }
            alt={ currentRecipe.strDrink }
            data-testid="recipe-photo"
            className="image-details"
          />
          <h2
            className="title-details"
            data-testid="recipe-title"
          >
            { currentRecipe.strDrink }
          </h2>
          <h3
            data-testid="recipe-category"
            className="category-details"
          >
            {currentRecipe.strAlcoholic}
          </h3>
          <h4
            data-testid="recipe-category"
            className="category-details"
          >
            { currentRecipe.strCategory }
          </h4>
          <section>
            <button type="button" data-testid="share-btn">
              <img src={ shareIcon } alt="Compartilhar" />
            </button>
            <FavoriteButton dataTest="favorite-btn" />
          </section>
          <div>
            {
              filteredIngredients()
            }
          </div>
          <section
            className="instructions"
            data-testid="instructions"
          >
            <h4>Instruções de preparo:</h4>
            <p data-testid="instructions">{ currentRecipe.strInstructions }</p>
          </section>
          <Link to="/receitas-feitas">
            <button
              type="button"
              data-testid="finish-recipe-btn"
            >
              Finalizar Receita
            </button>
          </Link>
        </section>
      );
    }

    if (currentRecipe && currentRecipe.strMeal) {
      return (
        <section className="details-container">
          <img
            src={ currentRecipe.strMealThumb }
            alt={ currentRecipe.strMeal }
            data-testid="recipe-photo"
            className="image-details"
          />
          <h2
            className="title-details"
            data-testid="recipe-title"
          >
            { currentRecipe.strMeal }
          </h2>
          <h4
            data-testid="recipe-category"
            className="category-details"
          >
            { currentRecipe.strCategory }
          </h4>
          <section>
            <button type="button" data-testid="share-btn">
              <img src={ shareIcon } alt="Compartilhar" />
            </button>
            <button type="button" data-testid="favorite-btn">
              <img src={ whiteHeartIcon } alt="Favoritar" />
            </button>
          </section>
          <div>
            {
              filteredIngredients()
            }
          </div>
          <section
            className="instructions"
            data-testid="instructions"
          >
            <h4>Instruções de preparo:</h4>
            <p data-testid="instructions">{ currentRecipe.strInstructions }</p>
          </section>
          <Link to="/receitas-feitas">
            <button
              type="button"
              data-testid="finish-recipe-btn"
            >
              Finalizar Receita
            </button>
          </Link>
        </section>
      );
    }

    return null;
  };

  return renderInProgress();
};

export default InProgress;
