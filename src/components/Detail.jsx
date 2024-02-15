import "../scss/App.scss";
import cover from "../images/cover.jpeg";
import girlUser from "../images/girluser.png";

function Detail({ card }) {
  return (
    <>
      <section className="detail">
        <h4 className="subtitle">
          Escaparate en linea para recoger ideas a través de la tecnología
        </h4>
        <img className="image" src={cover} alt="repo" />
        <div className="projects">
          <div className="firstBlockText">
            <img
              className="firstBlockText__img girlIMg"
              src={girlUser}
              alt="ProjectPhoto"
            />
            <h5 className="firstBlockText__job job">Full stack developer</h5>
            <h3 className="firstBlockText__userName userName">
              Emmelie Böjklund
            </h3>
          </div>
          <div className="secondBlockText textCont">
          <p className="subtitle lineText">Personal Project Card</p>
          <hr className="line" />
            <h4 className="secondBlockText__project projectText">
              Elegeant Workspace
            </h4>
            <h5 className="secondBlockText__design slogan">
              Diseños Exclusivos
            </h5>
            <p className="secondBlockText__desc desc">
              Product Description Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Amet faucibus commodo tellus lectus lobortis.
              Ultricies lacus, facilisis arcu ac mauris, laoreet sit.
            </p>
            <div className="techs">
              <span className="techs__text techsText">
                React JS - HTML- CSS
              </span>
              <span className="techs__icons">
                <i className="technologies__iconSection--icon fa-solid fa-globe icon"></i>
                <i className="technologies__iconSection--icon fa-brands fa-github icon"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Detail;
