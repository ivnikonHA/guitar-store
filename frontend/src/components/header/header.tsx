import Logo from '../logo/logo';
import MainNavigation from '../main-navigation/main-navigation';

function Header(): JSX.Element {
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="main-nav">
            <MainNavigation />
          </nav>
          <div className="header__container">
            <span className="header__user-name">Имя</span>
            <a className="header__link" href="login.html" aria-label="Перейти в личный кабинет">
              <svg className="header__link-icon" width="12" height="14" aria-hidden="true">
                <use xlinkHref="#icon-account"></use>
              </svg><span className="header__link-text">Вход</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
