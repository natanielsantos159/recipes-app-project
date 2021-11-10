import React from 'react';
import { useLocation } from 'react-router-dom';

const useRenderCard = ({ receitas, index }) => {
  const { pathname } = useLocation();
  if (pathname === '/comidas') {
    return (
      <div data-testid={ `${index}-recipe-card` }>
        <img
          src={ receitas.strMealThumb }
          alt={ receitas.strMeal }
          data-testid={ `${index}-card-img` }
        />
        <h3 data-testid={ `${index}-card-name` }>{ receitas.strMeal }</h3>
      </div>
    );
  }
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        src={ receitas.strDrinkThumb }
        alt={ receitas.strDrink }
        data-testid={ `${index}-card-img` }
      />
      <h3 data-testid={ `${index}-card-name` }>{ receitas.strDrink }</h3>
    </div>);
};

const Card = (receita) => (
  useRenderCard(receita)
);

export default Card;
