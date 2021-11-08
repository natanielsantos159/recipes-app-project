import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const contextValue = {
    loading,
    setLoading,
    email,
    setEmail,
    password,
    setPassword,
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
