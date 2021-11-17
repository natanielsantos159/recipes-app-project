import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { fetchAllDrinks } from '../api/drinks';
import AppContext from '../context/AppContext';
import '../Styles/Card.css';

const maxRecipes = 12;

const renderCards = (drink, index) => (
  <Card
    key={ drink.idDrink }
    receitas={ drink }
    index={ index }
    dataTest={ `${index}-recipe-card` }
  />);

const Bebidas = () => {
  const { drinks, Fetched, setDrinks,
    setFetched, exploredDrinks } = useContext(AppContext);

  useEffect(() => {
    fetchAllDrinks().then((response) => setDrinks(response));
    setFetched(true);
  }, [setFetched, setDrinks]);

  const mainDrinks = (Fetched && drinks.length > maxRecipes ? drinks.slice(0, maxRecipes)
    .map(renderCards) : drinks.map(renderCards));

  const mainExplored = (Fetched && exploredDrinks.length > maxRecipes
    ? exploredDrinks.slice(0, maxRecipes)
      .map(renderCards) : exploredDrinks.map(renderCards));

  return (
    <main>
      <Header titlePage="Bebidas" />
      <section className="main-cards-container">
        {exploredDrinks.length > 0 ? mainExplored : mainDrinks}
      </section>
      <Footer />
    </main>
  );
};

export default Bebidas;
