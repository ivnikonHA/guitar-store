import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

function MainNavigation(): JSX.Element {
  return (
    <ul className="main-nav__list">
      <li className="main-nav__item">
        <Link className="link main-nav__link" to={AppRoute.ProductList}>Каталог</Link>
      </li>
      <li className="main-nav__item"><a className="link main-nav__link" href="#">Где купить?</a>
      </li>
      <li className="main-nav__item"><a className="link main-nav__link" href="#">О компании</a>
      </li>
    </ul>
  )
}

export default MainNavigation;
