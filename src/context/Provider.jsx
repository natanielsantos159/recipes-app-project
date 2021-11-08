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
