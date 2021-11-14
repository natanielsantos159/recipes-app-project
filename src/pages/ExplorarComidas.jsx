import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchMealsById, fetchRandomFood } from '../api/meals';
import AppContext from '../context/AppContext';

const useExplorarComidas = () => {
  const { recipeDetail, setRecipeDetail } = useContext(AppContext);

  useEffect(() => {
    fetchRandomFood().then((res) => fetchMealsById(res[0].idMeal))
      .then(setRecipeDetail);
  }, [setRecipeDetail]);

  const currentFood = recipeDetail[0];
  if (currentFood) {
    return (
      <main>
        <Header titlePage="Explorar Comidas" show={ false } />
        <Link to="/explorar/comidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button type="button" data-testid="explore-by-area">Por Local de Origem</button>
        </Link>
        <Link to={ `/comidas/${recipeDetail[0].idMeal}` }>
          <button type="button" data-testid="explore-surprise">Me Surpreenda!</button>
        </Link>
        <Footer />
      </main>
    );
  } return null;
};

export default useExplorarComidas;
