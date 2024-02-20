import { Link } from 'react-router-dom';
import girlUser from '../images/girluser.png';


function GalleryDetail({detailCard}) {



  return (
    <Link className='projects__link' to="/detail">
          <div className="projects">
            <div className="firstBlockText">
              <img
                className="firstBlockText__img"
                src={girlUser}
                alt="ProjectPhoto"
              />
              <h5 className="firstBlockText__job">Full stack developer</h5>
              <h3 className="firstBlockText__userName">{detailCard.name}</h3>
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
  )
}

export default GalleryDetail