import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router';
import { fetchFilterByCategorieDrink, fetchCategorieDrinks } from '../api/categorieDrink';
import { fetchFilterByCategorieFood, fetchCategorieFood } from '../api/categorieFood';
import AppContext from '../context/AppContext';

const FilterCategorie = () => {
  const { pathname } = useLocation();
  const {
    categories,
    setCategories,
    setDrinks,
    setFoods } = useContext(AppContext);

  useEffect(() => {
    if (pathname === '/comidas') {
      fetchCategorieFood().then(setCategories);
    }
    if (pathname === '/bebidas') {
      fetchCategorieDrinks().then(setCategories);
    }
  }, []);

  const maxButtons = 5;

  const handleClick = (categorie) => {
    if (pathname === '/comidas') {
      fetchFilterByCategorieFood(categorie).then(setFoods);
    }
    if (pathname === '/bebidas') {
      console.log(categorie);
      fetchFilterByCategorieDrink(categorie).then(setDrinks);
    }
  };

  return (
    <section>
      {categories.map(({ strCategory }, index) => {
        if (index < maxButtons) {
          return (
            <button
              type="button"
              key={ index }
              data-testid={ `${strCategory}-category-filter` }
              onClick={ () => handleClick(strCategory) }
            >
              {strCategory}
            </button>
          );
        } return null;
      })}
    </section>
  );
};

export default FilterCategorie;
