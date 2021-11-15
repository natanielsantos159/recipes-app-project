import React, { useContext, useEffect } from 'react';
import { fetchAllFoods, fetchMealsArea } from '../api/meals';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import { renderCards } from './Comidas';

const useExplorarOrigem = () => {
  const { foods, area, setArea, setFoods } = useContext(AppContext);

  useEffect(() => {
    fetchMealsArea().then(setArea);
    fetchAllFoods().then(setFoods);
  }, [setArea, setFoods]);

  const max = 12;

  const options = (currentArea) => (
    <option data-testid={ `${currentArea.strArea}-option` } value={ currentArea.strArea }>
      { currentArea.strArea }
    </option>
  );

  const mainFoods = (foods.length > max ? foods.slice(0, max)
    .map(renderCards) : foods.map(renderCards));

  return (
    <main>
      <Header titlePage="Explorar Origem" />
      <select data-testid="explore-by-area-dropdown">
        <option data-testid="All-option" value="All">All</option>
        {area.map(options)}
      </select>
      {mainFoods}
      <Footer />
    </main>
  );
};

export default useExplorarOrigem;
