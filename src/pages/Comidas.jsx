import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchAllFoods } from '../api/meals';
import AppContext from '../context/AppContext';

const maxRecipes = 12;

const renderCards = (food, index) => (
  <Card
    key={ food.idMeal }
    receitas={ food }
    index={ index }
  />);

const Comidas = () => {
  const { foods, Fetched, setFoods, setFetched } = useContext(AppContext);
  useEffect(() => {
    fetchAllFoods().then((response) => setFoods(response));
    setFetched(true);
  }, []);

  return (
    <main>
      <Header titlePage="Comidas" />
      {(Fetched && foods.length > maxRecipes ? foods.slice(0, maxRecipes)
        .map(renderCards) : foods.map(renderCards))}
      <Footer />
    </main>
  );
};

export default Comidas;
