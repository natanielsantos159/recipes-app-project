import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../Styles/Perfil.css';

const Perfil = () => {
  if (JSON.parse(localStorage.getItem('user') === null)) {
    localStorage.setItem('user', JSON.stringify({ email: 'a' }));
  }
  const { email } = JSON.parse(localStorage.getItem('user'));

  return (
    <main>
      <Header titlePage="Perfil" show={ false } />
      <p data-testid="profile-email">{email}</p>
      <section className="btns-profile-container">
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
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => localStorage.clear() }
          >
            Sair
          </button>
        </Link>
      </section>
      <Footer />
    </main>
  );
};

export default Perfil;
