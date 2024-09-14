import { useState, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { ChangeHandler } from '../../types/state';
import { CreateUserDTO } from '../../types/user-data';
import { registerAction } from '../../store/api-actions';
import { AppRoute } from '../../consts';

function Register(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleFieldChange: ChangeHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const dto: CreateUserDTO = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    };
    dispatch(registerAction(dto)).unwrap()
      .then(() => navigate(AppRoute.Root))
      .catch(() => toast('Error to register'))
  };

  const handleShowPasswordButton = () => {
    setShowPassword((showPassword) => !showPassword);
  }

  return (
    <>
      <Helmet>
        <title>Guitar Shop - Регистрация</title>
      </Helmet>
      <main className="page-content">
        <div className="container">
          <section className="login">
            <h1 className="login__title">Регистрация</h1>
            <form method="post" action="" onSubmit={handleSubmitForm}>
              <div className="input-login">
                <label htmlFor="name">Введите имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="off"
                  required
                  value={formData.name}
                  onChange={handleFieldChange}
                />
                <p className="input-login__error">Заполните поле</p>
              </div>
              <div className="input-login">
                <label htmlFor="email">Введите e-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  required
                  value={formData.email}
                  onChange={handleFieldChange}
                />
                <p className="input-login__error">Заполните поле</p>
              </div>
              <div className="input-login">
                <label htmlFor="password">Придумайте пароль</label><span>
                  <input
                    type={showPassword? "text": "password"}
                    placeholder="• • • • • • • • • • • •"
                    id="password"
                    name="password"
                    autoComplete="off"
                    required
                    value={formData.password}
                    onChange={handleFieldChange}
                  />
                  <button
                    className="input-login__button-eye"
                    type="button"
                    onClick={handleShowPasswordButton}
                  >
                    <svg width="14" height="8" aria-hidden="true">
                      <use xlinkHref="#icon-eye"></use>
                    </svg>
                  </button></span>
                <p className="input-login__error">Заполните поле</p>
              </div>
              <button className="button login__button button--medium" type="submit">Зарегистрироваться</button>
            </form>
          </section>
        </div>
      </main>
    </>
  )
}

export default Register;
