import { Link } from 'react-router-dom';
import girlUser from '../images/girluser.png';

import { useParams } from 'react-router-dom';

function Landing({ card }) {
  const { preview } = useParams();

  return (
    <div>
      <div className="landing">
        <h1 className="landing__title">Bienvenido a Proyectos Molones </h1>
        <h3 className="landing__text">
          Escaparate en línea para recoger ideas a través de la tecnología.
        </h3>
        <Link className="landing__btn--link" to="/main">
          <button className="landing__btn ">Crear un Nuevo Proyecto </button>
        </Link>
        <Link className='projects__link' to="/detail">
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
        </Link>
      </div>
    </div>
  );
}

export default Landing;
