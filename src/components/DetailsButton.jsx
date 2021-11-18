import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../Styles/Detalhes.css';

const DetailsButton = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { recipeDetail,
    inProgressRecipes,
    setInProgressRecipes } = useContext(AppContext);
  const { cocktails, meals } = inProgressRecipes;
  const history = useHistory();
  const [verify, setVerify] = useState();

  const filterIngredients = Object.entries(recipeDetail[0])
    .filter(([key, value]) => key.includes('strIngredient')
        && (value !== '') && (value !== null));
  const ingredients = filterIngredients.map((e) => e[1]);

  const createObj = () => {
    if (pathname.includes('comida')) {
      return {
        cocktails: {
          ...cocktails,
        },
        meals: {
          ...meals,
          [id]: ingredients,
        },
      };
    } return {
      meals: {
        ...meals,
      },
      cocktails: {
        ...cocktails,
        [id]: ingredients,
      },
    };
  };

  const setTrueOrFalse = () => {
    if (pathname.includes('comidas')) {
      return setVerify(Object.keys(meals).some((e) => e === id));
    }

    setVerify(Object.keys(cocktails).some((e) => e === id));
  };

  useEffect(() => {
    setTrueOrFalse();
    const local = localStorage.getItem('inProgressRecipes');
    if (local) {
      setInProgressRecipes(JSON.parse(local));
    }
  }, []);

  useEffect(() => {
    setTrueOrFalse();
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }, [inProgressRecipes]);

  const startRecipe = async () => {
    await setInProgressRecipes(createObj());
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

  if (verify) {
    return buttonContinueRecipe();
  } return buttonInitRecipe();
};

export default DetailsButton;


asdfswfswedf