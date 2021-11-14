import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import getDrinks, { fetchDrinksIngredients } from '../api/drinks';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

const useExplorarIngredientesBebidas = () => {
  const { ingredients, setIngredients, setExploredDrinks } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    fetchDrinksIngredients().then(setIngredients);
  }, [setIngredients]);

  const magicNumber = 12;

  const handleChange = (ingredient) => {
    getDrinks('ingredient', ingredient.strIngredient1).then(setExploredDrinks);
    history.push('/bebidas');
  };

  const useRenderCards = (ingredient, index) => (
    <button
      onClick={ () => handleChange(ingredient) }
      type="button"
      data-testid={ `${index}-ingredient-card` }
      key={ ingredient.strIngredient1 }
    >
      <img
        src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
        alt={ ingredient.strIngredient1 }
        data-testid={ `${index}-card-img` }
      />
      <h3 data-testid={ `${index}-card-name` }>{ ingredient.strIngredient1 }</h3>
    </button>
  );
  return (

    <main>
      <Header titlePage="Explorar Ingredientes" show={ false } />
      {ingredients.length > magicNumber
        ? ingredients.slice(0, magicNumber).map(useRenderCards)
        : ingredients.map(useRenderCards)}
      <Footer />
    </main>
  );
};

export default useExplorarIngredientesBebidas;
