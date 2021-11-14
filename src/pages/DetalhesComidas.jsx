import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMealsById } from '../api/meals';
import { fetchAllDrinks } from '../api/drinks';

import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import AppContext from '../context/AppContext';

import Card from '../components/Card';

const DetalhesComidas = () => {
  const { recipeDetail, setRecipeDetail, drinks, setDrinks } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    fetchMealsById(id).then(setRecipeDetail);
    fetchAllDrinks().then(setDrinks);
  }, [setRecipeDetail, setDrinks, id]);

  const currentMeal = recipeDetail[0];
  const renderDetails = () => {
    const magicNumber = 32;

    if (currentMeal) {
      const filterIngredients = Object.entries(currentMeal)
        .filter(([key, value]) => key.includes('strIngredient')
        && (value !== '') && (value !== null));

      return (
        <div>
          <img
            src={ currentMeal.strMealThumb }
            alt={ currentMeal.strMeal }
            data-testid="recipe-photo"
          />
          <h2 data-testid="recipe-title">{ currentMeal.strMeal }</h2>
          <div>
            <button type="button" data-testid="share-btn">
              <img src={ shareIcon } alt="Compartilhar" />
            </button>
            <button type="button" data-testid="favorite-btn">
              <img src={ whiteHeartIcon } alt="Favoritar" />
            </button>
          </div>
          <h3 data-testid="recipe-category">{ currentMeal.strCategory }</h3>
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
            <p data-testid="instructions">{ currentMeal.strInstructions }</p>
          </div>
          <div key={ currentMeal.idMeal }>
            <iframe
              title="video"
              width="420"
              height="315"
              data-testid="video"
              src={ currentMeal.strYoutube ? `https://www.youtube.com/embed/${currentMeal.strYoutube.slice(magicNumber)}` : '' }
            />
          </div>
          {
            drinks.map((drink, i) => {
              if (drinks !== null) {
                return (<Card
                  dataTest={ `${i}-recomendation-card` }
                  key={ drink.idDrink }
                  receitas={ drink }
                  index={ i }
                />);
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
