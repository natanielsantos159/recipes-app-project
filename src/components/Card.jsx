import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const useRenderCard = ({ receitas, index, dataTest }) => {
  const { pathname } = useLocation();
  if (pathname === '/comidas') {
    return (
      <Link to={ `/comidas/${receitas.idMeal}` }>
        <div data-testid={ dataTest }>
          <img
            src={ receitas.strMealThumb }
            alt={ receitas.strMeal }
            data-testid={ `${index}-card-img` }
          />
          <h3 data-testid={ `${index}-card-name` }>{ receitas.strMeal }</h3>
        </div>
      </Link>
    );
  }
  return (
    <Link to={ `/bebidas/${receitas.idDrink}` }>
      <div data-testid={ dataTest }>
        <img
          src={ receitas.strDrinkThumb }
          alt={ receitas.strDrink }
          data-testid={ `${index}-card-img` }
        />
        <h3 data-testid={ `${index}-card-name` }>{ receitas.strDrink }</h3>
      </div>
    </Link>);
};

const Card = (receita) => (
  useRenderCard(receita)
);

export default Card;
