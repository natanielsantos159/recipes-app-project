import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchAllDrinks } from '../api/drinks';
import AppContext from '../context/AppContext';

const maxRecipes = 12;

const renderCards = (drink, index) => (
  <Card
    key={ drink.idDrink }
    receitas={ drink }
    index={ index }
  />);

const Bebidas = () => {
  const { drinks, Fetched, setDrinks, setFetched } = useContext(AppContext);
  useEffect(() => {
    fetchAllDrinks().then((response) => setDrinks(response));
    setFetched(true);
  }, []);

  return (
    <main>
      <Header titlePage="Bebidas" />
      {(Fetched && drinks.length > maxRecipes ? drinks.slice(0, maxRecipes)
        .map(renderCards) : drinks.map(renderCards))}
      <Footer />
    </main>
  );
};

export default Bebidas;
