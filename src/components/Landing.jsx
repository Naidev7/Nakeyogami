import { Link } from 'react-router-dom';
import girlUser from '../images/girluser.png';
import LogoAdalab from '../images/LogoAdalab.png';

function Landing({ card }) {
  return (
    <div className="body">
      <div className="fakeHeader">
        <span className="icon">
          <i className="fa-solid fa-laptop-code"></i>{' '}
          <span className="icon__text">Proyectos Molones</span>
        </span>
        <img className="logo" src={LogoAdalab} alt="logoAdalab" />
      </div>
      <div className="landing">
        <h1 className="landing__title">Bienvenido a Proyectos Molones </h1>
        <h3 className="landing__text">
          Escaparate en línea para recoger ideas a través de la tecnología.
        </h3>
        <Link className="landing__btn--link" to="/home">
          <button className="landing__btn ">Entrar</button>
        </Link>
        <div className="projects">
          <div className="firstBlockText">
            <img
              className="firstBlockText__img"
              src={girlUser}
              alt="ProjectPhoto"
            />
            <h5 className="firstBlockText__job">Full stack developer</h5>
            <h3 className="firstBlockText__userName">Emmelie Böjklund</h3>
          </div>
          <div className="secondBlockText">
            <h4 className="secondBlockText__project">Elegeant Workspace</h4>
            <h5 className="secondBlockText__design">Diseños Exclusivos</h5>
            <p className="secondBlockText__desc">
              Product Description Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Amet faucibus commodo tellus lectus lobortis.
              Ultricies lacus, facilisis arcu ac mauris, laoreet sit.
            </p>
            <div className="techs">
              <span className="techs__text">React JS - HTML- CSS</span>
              <span className="techs__icons">
                <i className="technologies__iconSection--icon fa-solid fa-globe icon"></i>
                <i className="technologies__iconSection--icon fa-brands fa-github icon"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="fakeFooter">
        <img className="logo" src={LogoAdalab} alt="logoAdalab" />
      </div>
    </div>
  );
}

export default Landing;
