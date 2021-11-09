import React, { useContext } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

const maxRecipes = 12;

const Comidas = () => {
  const { foods, louden } = useContext(AppContext);
  return (
    <main>
      <Header titlePage="Comidas" />
      {louden ? foods.slice(0, maxRecipes)
        .map((food, index) => (
          <Card
            key={ food.idMeal }
            receitas={ food }
            index={ index }
          />)) : ''}
      <Footer />
    </main>
  );
};

export default Comidas;
