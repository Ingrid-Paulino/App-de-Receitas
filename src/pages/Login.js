import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const MIN_CHARACTERES_PASSWORD = 7;
    const passwordValidate = password.length >= MIN_CHARACTERES_PASSWORD;

    const testEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(email);

    if (testEmail && passwordValidate) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  // formato do personEmail = { email: email} -> é um objeto
  const personEmail = { email };

  const handleClick = () => {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify(personEmail));
    history.push('/comidas');
  };

  return (
    <main>
      <section>
        <h1>Login</h1>
      </section>
      <section>
        <form>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={ email }
            data-testid="email-input"
            onChange={ (e) => setEmail(e.target.value) }
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            data-testid="password-input"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
            required
          />
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ disabled }
            onClick={ handleClick }
          >
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;