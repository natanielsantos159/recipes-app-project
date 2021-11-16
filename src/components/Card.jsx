import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Card.css';

const useRenderCard = ({ receitas, index, dataTest }) => {
  const { pathname } = useLocation();
  if ((pathname === '/comidas') || (pathname === '/explorar/comidas/area')) {
    return (
      <Link
        className="link-card"
        to={ `/comidas/${receitas.idMeal}` }
      >
        <section
          className="card"
          data-testid={ dataTest }
        >
          <img
            className="image-card"
            src={ receitas.strMealThumb }
            alt={ receitas.strMeal }
            data-testid={ `${index}-card-img` }
          />
          <h3
            data-testid={ `${index}-card-name` }
            className="card-title"
          >
            { receitas.strMeal }

          </h3>
        </section>
      </Link>
    );
  }

  return (
    <Link
      className="link-card"
      to={ `/bebidas/${receitas.idDrink}` }
    >
      <div
        data-testid={ dataTest }
        className="card"
      >
        <img
          className="image-card"
          src={ receitas.strDrinkThumb }
          alt={ receitas.strDrink }
          data-testid={ `${index}-card-img` }
        />
        <section>
          <h3
            className="card-title"
            data-testid={ `${index}-card-name` }
          >
            { receitas.strDrink }

          </h3>
        </section>
      </div>
    </Link>);
};

const Card = (receita) => (
  useRenderCard(receita)
);

export default Card;
