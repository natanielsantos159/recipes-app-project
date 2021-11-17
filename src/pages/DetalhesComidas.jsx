import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMealsById } from '../api/meals';
import { fetchAllDrinks } from '../api/drinks';

import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import AppContext from '../context/AppContext';

import '../Styles/Detalhes.css';
import RecomendationCard from '../components/RecomendationCard';

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
      const filterMeasure = Object.entries(currentMeal)
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

      return (
        <section className="details-container">
          <img
            src={ currentMeal.strMealThumb }
            alt={ currentMeal.strMeal }
            data-testid="recipe-photo"
            className="image-details"
          />
          <h2
            className="title-details"
            data-testid="recipe-title"
          >
            { currentMeal.strMeal }
          </h2>
          <h3
            data-testid="recipe-category"
            className="category-details"
          >
            { currentMeal.strCategory }
          </h3>
          <section>
            <button type="button" data-testid="share-btn">
              <img src={ shareIcon } alt="Compartilhar" />
            </button>
            <button type="button" data-testid="favorite-btn">
              <img src={ whiteHeartIcon } alt="Favoritar" />
            </button>
          </section>
          <ul>
            {filterIngredients.map(([key, value], i) => (
              <li
                data-testid={ `${i}-ingredient-name-and-measure` }
                key={ key }
              >
                {`${filterMeasure[i]} ${value}`}
              </li>))}
          </ul>
          <div data-testid="instructions">
            <h4>Instruções de preparo:</h4>
            <p data-testid="instructions">{ currentMeal.strInstructions }</p>
          </div>
          <section key={ currentMeal.idMeal }>
            <iframe
              title="video"
              width="330"
              height="315"
              data-testid="video"
              src={ currentMeal.strYoutube ? `https://www.youtube.com/embed/${currentMeal.strYoutube.slice(magicNumber)}` : '' }
            />
          </section>
          <section className="recomendation-container">
            {
              drinks.map((drink, i) => (
                <RecomendationCard
                  obj={ drink }
                  i={ i }
                  key={ i }
                />
              ))
            }
          </section>
          <button
            type="button"
            data-testid="start-recipe-btn"
            className="start-recipe-btn"
          >
            Iniciar Receita
          </button>
        </section>
      );
    }

    return null;
  };

  return renderDetails();
};

export default DetalhesComidas;
