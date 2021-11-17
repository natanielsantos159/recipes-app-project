import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import AppContext from '../context/AppContext';

const RecomendationCard = ({ obj, i }) => {
  const { pathname } = useLocation();
  const { drinks, foods } = useContext(AppContext);
  const maxRecomedantion = 6;

  if (pathname.includes('comidas')) {
    if (drinks !== null && i < maxRecomedantion) {
      return (
        <Link
          className="link-card recomendation"
          to={ `/bebidas/${obj.idDrink}` }
          key={ obj.idDrink }
        >
          <div
            className="card"
            data-testid={ `${i}-recomendation-card` }
          >
            <img
              src={ obj.strDrinkThumb }
              alt={ obj.strDrink }
              data-testid={ `${i}-card-img` }
              className="image-card "
            />
            <h3
              className="card-title "
              data-testid={ `${i}-recomendation-title` }
            >
              { obj.strDrink }

            </h3>
          </div>
        </Link>);
    }
    return null;
  } if (foods !== null && i < maxRecomedantion) {
    return (
      <Link
        className="link-card recomendation"
        to={ `/comidas/${obj.idMeal}` }
        key={ obj.idMeal }
      >
        <div
          className="card"
          data-testid={ `${i}-recomendation-card` }
        >
          <img
            src={ obj.strMealThumb }
            alt={ obj.strMeal }
            data-testid={ `${i}-card-img` }
            className="image-card "
          />
          <h3
            className="card-title "
            data-testid={ `${i}-recomendation-title` }
          >
            { obj.strMeal }

          </h3>
        </div>
      </Link>
    );
  }
  return null;
};

RecomendationCard.propTypes = {
  i: PropTypes.number.isRequired,
  obj: PropTypes.shape({
    idDrink: PropTypes.string,
    idMeal: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
};

export default RecomendationCard;
