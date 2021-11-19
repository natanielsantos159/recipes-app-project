import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllFoods } from '../api/meals';
import { fetchDrinksById } from '../api/drinks';
import '../Styles/Detalhes.css';
import shareIcon from '../images/shareIcon.svg';
import FavoriteButton from '../components/FavoriteButton';

import AppContext from '../context/AppContext';
import RecomendationCard from '../components/RecomendationCard';
import DetailsButton from '../components/DetailsButton';

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
      const filterMeasure = Object.entries(currentDrinks)
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
            src={ currentDrinks.strDrinkThumb }
            alt={ currentDrinks.strDrink }
            data-testid="recipe-photo"
            className="image-details"
          />
          <h2
            className="title-details"
            data-testid="recipe-title"
          >
            {currentDrinks.strDrink}
          </h2>
          <h3
            data-testid="recipe-category"
            className="category-details"
          >
            {currentDrinks.strAlcoholic}
          </h3>
          <h4
            data-testid="recipe-category"
            className="category-details"
          >
            {currentDrinks.strCategory}
          </h4>
          <section>
            <button type="button" data-testid="share-btn">
              <img src={ shareIcon } alt="Compartilhar" />
            </button>
            <FavoriteButton dataTest="favorite-btn" idProps={ id } />
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
          <section
            className="instructions"
            data-testid="instructions"
          >
            <h4>Instruções de preparo:</h4>
            <p data-testid="instructions">{currentDrinks.strInstructions}</p>
          </section>
          <section className="recomendation-container">
            {
              foods.map((food, i) => (
                <RecomendationCard
                  obj={ food }
                  i={ i }
                  key={ i }
                />
              ))
            }
          </section>
          <DetailsButton />
        </section>
      );
    }

    return null;
  };

  return renderDetails();
};

export default DetalhesComidas;
