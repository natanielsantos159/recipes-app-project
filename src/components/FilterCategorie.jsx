import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { fetchFilterByCategorieDrink,
  fetchCategorieDrinks,
  fetchAllDrinks,
} from '../api/categorieDrink';
import { fetchFilterByCategorieFood,
  fetchCategorieFood,
  fetchAllFoods } from '../api/categorieFood';
import AppContext from '../context/AppContext';

const FilterCategorie = () => {
  const { pathname } = useLocation();
  const {
    categories,
    setCategories,
    setDrinks,
    setFetched,
    setFoods } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    if (pathname === '/comidas') {
      fetchCategorieFood().then(setCategories);
    }
    if (pathname === '/bebidas') {
      fetchCategorieDrinks().then(setCategories);
    }
  }, [pathname, setCategories]);

  const maxButtons = 5;

  const handleClick = (categorie) => {
    setFetched(false);

    if (pathname === '/comidas') {
      if (categorie === selectedCategory) {
        fetchAllFoods().then(setFoods);
        setFetched(true);
        setSelectedCategory('All');
      } else {
        fetchFilterByCategorieFood(categorie).then(setFoods);
        setFetched(true);
        setSelectedCategory(categorie);
      }
    }
    if (pathname === '/bebidas') {
      if (categorie === selectedCategory) {
        fetchAllDrinks().then(setDrinks);
        setFetched(true);
        setSelectedCategory('All');
      } else {
        fetchFilterByCategorieDrink(categorie).then(setDrinks);
        setFetched(true);
        setSelectedCategory(categorie);
      }
    }
  };

  const clickAll = () => {
    if (pathname === '/comidas') {
      fetchAllFoods().then(setFoods);
      setFetched(true);
      setSelectedCategory('All');
    } else {
      fetchAllDrinks().then(setDrinks);
      setFetched(true);
      setSelectedCategory('All');
    }
  };

  return (
    (pathname === '/comidas' || pathname === '/bebidas')
      && (
        <section>
          <button
            type="button"
            data-testid="All-category-filter"
            onClick={ clickAll }
          >
            All
          </button>
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
        </section>)
  );
};

export default FilterCategorie;
