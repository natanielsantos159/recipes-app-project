import React, { useContext } from 'react';

import '../Styles/Detalhes.css';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import AppContext from '../context/AppContext';

const InProgress = () => {
  const { recipeDetail } = useContext(AppContext);
  const currentRecipe = recipeDetail[0];

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
        key={ i }
        htmlFor={ i }
      >
        {`${filterMeasure[i]} ${value}`}
        <input
          id={ i }
          type="checkbox"
          data-testid={ `${i}-ingredient-step` }
          key={ key }
        />
      </label>));
  };

  const renderInProgress = () => {
    if (Object.getOwnPropertyDescriptor(currentRecipe, 'strDrink')) {
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
          <button
            type="button"
            data-testid="finish-recipe-btn"
          >
            Finalizar Receita
          </button>
        </section>
      );
    }

    if (Object.getOwnPropertyDescriptor(currentRecipe, 'strMeal')) {
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
          <button
            type="button"
            data-testid="finish-recipe-btn"
          >
            Finalizar Receita
          </button>
        </section>
      );
    }

    return null;
  };

  return renderInProgress();
};

export default InProgress;
