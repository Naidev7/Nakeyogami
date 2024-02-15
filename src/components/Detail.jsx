import '../scss/App.scss';
import cover from '../images/cover.jpeg';
import girlUser from '../images/girluser.png';

function Detail({ card }) {
  
  return (
    <>
      <section className="detail">
        <img className="detail___image" src={cover} alt="repo" /> 

        <section className="info__container">
          <section className="info-project">
            <p className="subtitle">Personal Project Card</p>
            <hr className="line" />

            <h2 className="title">Elegant Workspace</h2>
            <p className="slogan">Diseños Exclusivos</p>
            <p className="desc">
              Lorem, ipsum dolor sit amet consectetur 
            </p>
            <div className="technologies">
              <section className="technologies__text">
                <p className="text">React JS, MongoDB</p>
              </section>

              <section className="technologies__iconSection">
                <a href="#">
                  <i className="technologies__iconSection--icon fa-solid fa-globe"></i>
                </a>
                <a href="#">
                  <i className="technologies__iconSection--icon fa-brands fa-github"></i>
                </a>
              </section>
            </div>
          </section>

          <section className="info-autor">
            <img className="imageGirl" src={girlUser} alt="userPhoto" />
            <p className="job">Full Stack Developer</p>
            <p className="name">Emmelie Björklund</p>
          </section>
        </section>
      </section>
    </>
  );
}

export default Detail;
