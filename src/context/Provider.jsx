import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [filterRadio, setFilterRadio] = useState('');
  const [filterText, setFilterText] = useState('');
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([]);

  const contextValue = {
    loading,
    setLoading,
    email,
    setEmail,
    password,
    setPassword,
    filterRadio,
    setFilterRadio,
    filterText,
    setFilterText,
    foods,
    setFoods,
    drinks,
    setDrinks,
    categories,
    setCategories,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
