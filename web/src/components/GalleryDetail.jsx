import { Link } from 'react-router-dom';

function GalleryDetail({ detailCard }) {
  return (
    <Link className="projects__link" to="/detail">
      <div className="projects">
        <div className="firstBlockText">
          <img
            className="firstBlockText__img"
            src={detailCard.photo}
            alt="ProjectPhoto"
          />
          <h5 className="firstBlockText__job">{detailCard.job}</h5>
          <h3 className="firstBlockText__userName">{detailCard.nameAutor}</h3>
          <h3 className="firstBlockText__userName">{detailCard.lastname}</h3>
        </div>
        <div className="secondBlockText">
          <h4 className="secondBlockText__project">{detailCard.name}</h4>
          <h5 className="secondBlockText__design">{detailCard.slogan}</h5>
          <p className="secondBlockText__desc">{detailCard.desc}</p>
          <div className="techs">
            <span className="techs__text">{detailCard.technologies}</span>
            <span className="techs__icons">
              <i className=" fa-solid fa-globe icon "></i>

              <i className=" fa-brands fa-github icon "></i>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GalleryDetail;
