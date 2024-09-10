import { Link } from 'react-router-dom';

import { AppRoute } from '../../consts';

function Logo(): JSX.Element {
  return (
    <Link className="header__logo logo" to={AppRoute.Root}>
      <img className="logo__img" width="70" height="70" src="./img/svg/logo.svg" alt="Логотип" />
    </Link>
  )
}

export default Logo;
