import React, { useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchAllFoods } from '../api/meals';
import { fetchDrinksById } from '../api/drinks';
import '../Styles/Detalhes.css';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import AppContext from '../context/AppContext';
import RecomendationCard from '../components/RecomendationCard';

const DetalhesComidas = () => {
  const { recipeDetail, setRecipeDetail, foods, setFoods } = useContext(AppContext);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchDrinksById(id).then(setRecipeDetail);
    fetchAllFoods().then(setFoods);
  }, [setFoods, setRecipeDetail, id]);

  const currentDrinks = recipeDetail[0];

  const handleClick = () => {
    history.push(`/comidas/${id}/in-progress`);
  };

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
            { currentDrinks.strDrink }
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
            { currentDrinks.strCategory }
          </h4>
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
          <section
            className="instructions"
            data-testid="instructions"
          >
            <h4>Instruções de preparo:</h4>
            <p data-testid="instructions">{ currentDrinks.strInstructions }</p>
          </section>
          <button
            type="button"
            data-testid="start-recipe-btn"
            onClick={ handleClick }
          >
            Iniciar Receita
          </button>
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
        </section>
      );
    }

    return null;
  };

  return renderDetails();
};

export default DetalhesComidas;
