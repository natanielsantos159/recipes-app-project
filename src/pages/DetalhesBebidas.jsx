import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchAllFoods } from '../api/meals';
import { fetchDrinksById } from '../api/drinks';
import '../Styles/Detalhes.css';
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
          <section className="">
            <button type="button" data-testid="share-btn">
              <img src={ shareIcon } alt="Compartilhar" />
            </button>
            <button type="button" data-testid="favorite-btn">
              <img src={ whiteHeartIcon } alt="Favoritar" />
            </button>
          </section>
          <h3 data-testid="recipe-category">{ currentDrinks.strCategory }</h3>
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
          >
            Iniciar Receita
          </button>
          <section className="recomendation-container">
            {
              foods.map((food, i) => {
                if (foods !== null) {
                  return (
                    <Link
                      className="link-card recomendation"
                      to={ `/comidas/${food.idMeal}` }
                      key={ food.idMeal }
                    >
                      <div
                        className="card"
                        data-testid={ `${i}-recomendation-card` }
                      >
                        <img
                          src={ food.strMealThumb }
                          alt={ food.strMeal }
                          data-testid={ `${i}-card-img` }
                          className="image-card "
                        />
                        <h3
                          className="card-title "
                          data-testid={ `${i}-card-name` }
                        >
                          { food.strMeal }

                        </h3>
                      </div>
                    </Link>
                  );
                }
                return null;
              })
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
