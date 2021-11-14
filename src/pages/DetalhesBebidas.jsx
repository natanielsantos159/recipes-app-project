import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchAllFoods } from '../api/meals';
import { fetchDrinksById } from '../api/drinks';

import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import AppContext from '../context/AppContext';

const DetalhesComidas = () => {
  const { recipeDetail, setRecipeDetail, foods, setFoods } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    fetchDrinksById(id).then(setRecipeDetail);
    fetchAllFoods().then(setFoods);
  }, [setFoods, setRecipeDetail, id]);

  const currentDrinks = recipeDetail[0];

  const renderDetails = () => {
    if (currentDrinks) {
      const filterIngredients = Object.entries(currentDrinks)
        .filter(([key, value]) => key.includes('strIngredient')
        && (value !== '') && (value !== null));
      return (
        <div>
          <img
            src={ currentDrinks.strDrinkThumb }
            alt={ currentDrinks.strDrink }
            data-testid="recipe-photo"
          />
          <h2 data-testid="recipe-title">{ currentDrinks.strDrink }</h2>
          <div>
            <button type="button" data-testid="share-btn">
              <img src={ shareIcon } alt="Compartilhar" />
            </button>
            <button type="button" data-testid="favorite-btn">
              <img src={ whiteHeartIcon } alt="Favoritar" />
            </button>
          </div>
          <h3 data-testid="recipe-category">{ currentDrinks.strCategory }</h3>
          <ul>
            {filterIngredients.map(([key, value], i) => (
              <li
                data-testid={ `${i}-ingredient-name-and-measure` }
                key={ key }
              >
                {value}
              </li>))}
          </ul>
          <div data-testid="instructions">
            <h4>Instruções de preparo:</h4>
            <p data-testid="instructions">{ currentDrinks.strInstructions }</p>
          </div>
          {
            foods.map((food, i) => {
              if (foods !== null) {
                return (
                  <Link to={ `/comidas/${food.idMeal}` } key={ food.idMeal }>
                    <div data-testid={ `${i}-recomendation-card` }>
                      <img
                        src={ food.strMealThumb }
                        alt={ food.strMeal }
                        data-testid={ `${i}-card-img` }
                      />
                      <h3 data-testid={ `${i}-card-name` }>{ food.strMeal }</h3>
                    </div>
                  </Link>
                );
              }
              return null;
            })
          }

          <button
            type="button"
            data-testid="start-recipe-btn"
          >
            Iniciar Receita
          </button>
        </div>
      );
    }

    return null;
  };

  return renderDetails();
};

export default DetalhesComidas;
