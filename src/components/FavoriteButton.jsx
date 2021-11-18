import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const FavoriteButton = () => {
  const { recipeDetail } = useContext(AppContext);
  const { pathname } = useLocation();
  const [verify, setVerify] = useState();
  const { id } = useParams();
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const setTrueOrFalse = () => {
    setVerify(favoriteRecipes.some((e) => e.id === id));
  };

  const createObj = () => {
    if (pathname.includes('bebidas')) {
      return [...favoriteRecipes, {
        id: recipeDetail[0].idDrink,
        type: 'bebida',
        area: '',
        category: recipeDetail[0].strCategory,
        alcoholicOrNot: recipeDetail[0].strAlcoholic,
        name: recipeDetail[0].strDrink,
        image: recipeDetail[0].strDrinkThumb,
      }];
    }
    return [...favoriteRecipes, {
      id: recipeDetail[0].idMeal,
      type: 'comida',
      area: recipeDetail[0].strArea,
      category: recipeDetail[0].strCategory,
      alcoholicOrNot: '',
      name: recipeDetail[0].strMeal,
      image: recipeDetail[0].strMealThumb,
    }];
  };

  const clickFavorite = () => {
    // setTrueOrFalse();
    if (!verify) {
      setFavoriteRecipes(createObj());
    } else {
      const index = favoriteRecipes.findIndex((e) => e.id === id);
      favoriteRecipes.splice(index, 1);
      setFavoriteRecipes(favoriteRecipes);
      setTrueOrFalse();
    }
  };

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    if (local) {
      setFavoriteRecipes(local);
    }
  }, []);

  useEffect(() => {
    setTrueOrFalse();
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes, setTrueOrFalse]);

  const setIcon = () => {
    if (verify) {
      return blackHeartIcon;
    }
    return whiteHeartIcon;
  };

  return (
    <button
      type="button"
      data-testid="favorite-btn"
      onClick={ () => clickFavorite() }
      src={ setIcon() }
    >
      <img src={ setIcon() } alt="Favoritar" />
    </button>
  );
};

export default FavoriteButton;
