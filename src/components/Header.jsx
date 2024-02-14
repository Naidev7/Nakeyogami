import '../scss/App.scss';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <p className="header__link--icon">
          <i className="fa-solid fa-laptop-code"></i>
        </p>
      </Link>
      <div className="header__text">
        <h1 className="header__text--title">Proyectos Molones</h1>
        {/* <p className="header__text--slogan">
          Escaparate en linea para recoger ideas a traves de la tecnologia
        </p> */}
      </div>
    </header>
  );
};

export default Header;
