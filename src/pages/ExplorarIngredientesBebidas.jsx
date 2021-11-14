import React, { useEffect, useContext } from 'react';
import { fetchDrinksIngredients } from '../api/drinks';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

const renderCards = (ingredient, index) => (
  <div data-testid={ `${index}-ingredient-card` } key={ ingredient.strIngredient1 }>
    <img
      src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
      alt={ ingredient.strIngredient1 }
      data-testid={ `${index}-card-img` }
    />
    <h3 data-testid={ `${index}-card-name` }>{ ingredient.strIngredient1 }</h3>
  </div>
);

const useExplorarIngredientesBebidas = () => {
  const { ingredients, setIngredients } = useContext(AppContext);

  useEffect(() => {
    fetchDrinksIngredients().then(setIngredients);
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

export default useExplorarIngredientesBebidas;
