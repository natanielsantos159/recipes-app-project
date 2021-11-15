import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import getFoods, { fetchMealsIngredients } from '../api/meals';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

const useExplorarIngredientesComidas = () => {
  const { ingredients, setIngredients, setExploredFoods } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    fetchMealsIngredients().then(setIngredients);
  }, [setIngredients]);

  const magicNumber = 12;

  const handleChange = (ingredient) => {
    getFoods('ingredient', ingredient.strIngredient).then(setExploredFoods);
    history.push('/comidas');
  };

  const useRenderCards = (ingredient, index) => (
    <button
      onClick={ () => handleChange(ingredient) }
      type="button"
      data-testid={ `${index}-ingredient-card` }
      key={ ingredient.idIngredient }
    >
      <img
        src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
        alt={ ingredient.strIngredient }
        data-testid={ `${index}-card-img` }
      />
      <h3 data-testid={ `${index}-card-name` }>{ ingredient.strIngredient }</h3>
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

export default useExplorarIngredientesComidas;
