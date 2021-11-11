import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

const Perfil = () => {
  const { email } = useContext(AppContext);
  return (
    <main>
      <Header titlePage="Perfil" show={ false } />
      <p data-testid="profile-email">{email}</p>
      <Link to="/receitas-feitas">
        <button type="button" data-testid="profile-done-btn">Receitas Feitas</button>
      </Link>
      <Link to="/receitas-favoritas">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/">
        <button type="button" data-testid="profile-logout-btn">Sair</button>
      </Link>
      <Footer />
    </main>
  );
};

export default Perfil;
