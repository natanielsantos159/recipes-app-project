import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const FavoriteButton = ({ dataTest, idProps }) => {
  const { recipeDetail } = useContext(AppContext);
  const { pathname } = useLocation();
  const [verify, setVerify] = useState();
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const setTrueOrFalse = () => {
    setVerify(favoriteRecipes.some((e) => e.id === idProps));
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
      const index = favoriteRecipes.findIndex((e) => e.id === idProps);
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
    setTrueOrFalse();
    console.log(verify);
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
      data-testid={ dataTest }
      onClick={ () => clickFavorite() }
      src={ setIcon() }
    >
      <img src={ setIcon() } alt="Favoritar" />
    </button>
  );
};

FavoriteButton.propTypes = {
  dataTest: PropTypes.string.isRequired,
  idProps: PropTypes.string.isRequired,
};

export default FavoriteButton;
