import React, { useEffect, useContext } from 'react';
import { fetchMealsIngredients } from '../api/meals';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

const renderCards = (ingredient, index) => (
  <div data-testid={ `${index}-ingredient-card` } key={ ingredient.idIngredient }>
    <img
      src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
      alt={ ingredient.strIngredient }
      data-testid={ `${index}-card-img` }
    />
    <h3 data-testid={ `${index}-card-name` }>{ ingredient.strIngredient }</h3>
  </div>
);

const useExplorarIngredientesComidas = () => {
  const { ingredients, setIngredients } = useContext(AppContext);

  useEffect(() => {
    fetchMealsIngredients().then(setIngredients);
  }, [setIngredients]);

  const magicNumber = 12;

  return (

    <main>
      <Header titlePage="Explorar Ingredientes" show={ false } />
      {ingredients.length > magicNumber
        ? ingredients.slice(0, magicNumber).map(renderCards)
        : ingredients.map(renderCards)}
      <Footer />
    </main>
  );
};

export default useExplorarIngredientesComidas;
