import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router';
import fetchCategorieDrinks from '../api/categorieDrink';
import fetchCategorieFood from '../api/categorieFood';
import AppContext from '../context/AppContext';

const FilterCategorie = () => {
  const { pathname } = useLocation();
  const {
    categories,
    setCategories } = useContext(AppContext);

  useEffect(() => {
    if (pathname === '/comidas') {
      fetchCategorieFood().then(setCategories);
    }
    if (pathname === '/bebidas') {
      fetchCategorieDrinks().then(setCategories);
    }
  }, []);

  const maxButtons = 5;

  return (
    <section>
      {categories.map(({ strCategory }, index) => {
        if (index < maxButtons) {
          return (
            <button
              type="button"
              key={ index }
              data-testid={ `${strCategory}-category-filter` }
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
