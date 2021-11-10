import React, { useContext } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

const maxRecipes = 12;

const Bebidas = () => {
  const { drinks, louden } = useContext(AppContext);
  return (
    <main>
      <Header titlePage="Bebidas" />
      {louden ? drinks.slice(0, maxRecipes)
        .map((drink, index) => (
          <Card
            key={ drink.idDrink }
            receitas={ drink }
            index={ index }
          />)) : ''}
      <Footer />
    </main>
  );
};

export default Bebidas;
