import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FormEvent, ReactEventHandler, useState } from 'react';
import { toast } from 'react-toastify';

import { AppRoute } from '../../consts';
import { AuthData } from '../../types/auth-data';
import { useDispatch } from 'react-redux';

type ChangeHandler = ReactEventHandler<HTMLInputElement>;

function Login(): JSX.Element {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const handleFieldChange: ChangeHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const authData: AuthData = {
      login: formData.email,
      password: formData.password
    };
    toast.promise(
      dispatch(loginAction(authData)).unwrap(),
      {
        pending: 'Logging in',
        error: 'Error to login'
      }
    );
  };

  return (
    <>
      <Helmet>
        <title>Guitar Shop</title>
      </Helmet>
      <main className="page-content">
        <div className="container">
          <section className="login">
            <h1 className="login__title">Войти</h1>
            <p className="login__text">Hовый пользователь?
              <Link className="login__link" to={AppRoute.Register}> Зарегистрируйтесь </Link>
             прямо сейчас</p>
            <form onSubmit={handleSubmitForm} method="post" action="">
              <div className="input-login">
                <label htmlFor="email">Введите e-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  required
                  onChange={handleFieldChange}
                  value={formData.email}
                />
                <p className="input-login__error">Заполните поле</p>
              </div>
              <div className="input-login">
                <label htmlFor="passwordLogin">Введите пароль</label>
                <span>
                  <input
                    type="password"
                    placeholder="• • • • • • • • • • • •"
                    id="passwordLogin"
                    name="password"
                    autoComplete="off"
                    required
                    onChange={handleFieldChange}
                  value={formData.password}
                  />
                  <button className="input-login__button-eye" type="button">
                    <svg width="14" height="8" aria-hidden="true">
                      <use xlinkHref="#icon-eye"></use>
                    </svg>
                  </button>
                </span>
                <p className="input-login__error">Заполните поле</p>
              </div>
              <button className="button login__button button--medium" type="submit">Войти</button>
            </form>
          </section>
        </div>
      </main>
    </>
  )
}

export default Login;
