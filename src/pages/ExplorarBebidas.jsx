import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchDrinksById, fetchRandomDrink } from '../api/drinks';
import AppContext from '../context/AppContext';

const useExplorarBebidas = () => {
  const { recipeDetail, setRecipeDetail } = useContext(AppContext);
  console.log(recipeDetail);

  useEffect(() => {
    fetchRandomDrink().then((res) => fetchDrinksById(res[0].idDrink))
      .then(setRecipeDetail);
  }, [setRecipeDetail]);

  const currentDrink = recipeDetail[0];
  if (currentDrink) {
    return (
      <main>
        <Header titlePage="Explorar Bebidas" show={ false } />
        <Link to="/explorar/bebidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to={ `/bebidas/${recipeDetail[0].idDrink}` }>
          <button type="button" data-testid="explore-surprise">Me Surpreenda!</button>
        </Link>
        <Footer />
      </main>
    );
  } return null;
};

export default useExplorarBebidas;
