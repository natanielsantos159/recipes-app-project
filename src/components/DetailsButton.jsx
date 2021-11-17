import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../Styles/Detalhes.css';

const DetailsButton = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { recipeDetail, doneRecipes, setDoneRecipes } = useContext(AppContext);
  const [isDone, setIsDone] = useState();
  const history = useHistory();

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    setDoneRecipes(recipes);
    setIsDone(doneRecipes.some((e) => e.id === id));
    console.log('teste');
  }, [isDone]);

  const startRecipe = () => {
    let obj;
    if (pathname.includes('bebidas')) {
      obj = {
        id: recipeDetail[0].idDrink,
        type: 'drink',
        area: '',
        category: recipeDetail[0].strCategory,
        alcoholicOrNot: recipeDetail[0].strAlcoholic,
        name: recipeDetail[0].strDrink,
        image: recipeDetail[0].strDrinkThumb,
      };
    } else {
      obj = {
        id: recipeDetail[0].idMeal,
        type: 'meal',
        area: recipeDetail[0].strArea,
        category: recipeDetail[0].strCategory,
        alcoholicOrNot: '',
        name: recipeDetail[0].strMeal,
        image: recipeDetail[0].strMealThumb,
      };
    }
    doneRecipes.push(obj);
    setDoneRecipes(doneRecipes);
    setIsDone(true);
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    history.push(`${pathname}/in-progress`);
  };

  const continueRecipe = () => {
    history.push(`${pathname}/in-progress`);
  };

  const buttonInitRecipe = () => (
    <button
      type="button"
      data-testid="start-recipe-btn"
      className="start-recipe-btn"
      onClick={ () => startRecipe() }
    >
      Iniciar Receita
    </button>
  );

  const buttonContinueRecipe = () => (
    <button
      type="button"
      data-testid="start-recipe-btn"
      className="start-recipe-btn"
      onClick={ () => continueRecipe() }
    >
      Continuar Receita
    </button>
  );

  if (isDone) {
    return buttonContinueRecipe();
  }
  return buttonInitRecipe();
};

export default DetailsButton;
