import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchAllFoods } from '../api/meals';
import AppContext from '../context/AppContext';

const maxRecipes = 12;

export const renderCards = (food, index) => (
  <Card
    key={ food.idMeal }
    receitas={ food }
    index={ index }
    dataTest={ `${index}-recipe-card` }
  />);

const Comidas = () => {
  const { foods, Fetched, setFoods, setFetched, exploredFoods } = useContext(AppContext);

  useEffect(() => {
    fetchAllFoods().then((response) => setFoods(response));
    setFetched(true);
  }, [setFetched, setFoods]);

  const mainFoods = (Fetched && foods.length > maxRecipes ? foods.slice(0, maxRecipes)
    .map(renderCards) : foods.map(renderCards));

  const mainExplored = (Fetched && foods.length > maxRecipes
    ? exploredFoods.slice(0, maxRecipes)
      .map(renderCards) : exploredFoods.map(renderCards));

  return (
    <main>
      <Header titlePage="Comidas" />
      {exploredFoods.length > 0 ? mainExplored : mainFoods}
      <Footer />
    </main>
  );
};

export default Comidas;
