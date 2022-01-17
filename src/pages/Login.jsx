import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../Styles/Login.css';

function Login() {
  const history = useHistory();
  const { email, setEmail, password, setPassword } = useContext(AppContext);

  function validateButton() {
    const magicNumber = 7;
    const checkEmailInput = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const checkPass = password.length < magicNumber;
    return !checkEmailInput.test(email) || checkPass;
  }

  function handleClick() {
    const user = {
      email,
    };
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/comidas');
  }

  return (
    <main>
      <form className="login-form">
        <input
          type="email"
          data-testid="email-input"
          placeholder="E-mail"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ validateButton() }
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    </main>
  );
}

export default Login;
