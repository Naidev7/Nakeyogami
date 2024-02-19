import '../scss/App.scss';
import cover from '../images/cover.jpeg';
import girlUser from '../images/girluser.png';

const Preview = ({ card }) => {
  const {
    name,
    slogan,
    repo,
    demo,
    technologies,
    desc,
    autor,
    job,
    image,
    photo,
  } = card;

  return (
    <section className="preview">
      <img className="image" src={image || cover} alt="repo" />

      <section className="autor">
        <section className="info-project">
          <p className="subtitle">Personal Project Card</p>
          <hr className="line" />

          <h2 className="title">{name || 'Elegant Workspace'}</h2>
          <p className="slogan">{slogan || 'Diseños Exclusivos'}</p>
          <p className="desc">
            {desc || 'Lorem, ipsum dolor sit amet consectetur '}
          </p>
          <div className="technologies">
            <section className="technologies__text">
              <p className="text">{technologies || 'React JS, MongoDB'}</p>
            </section>

            <section className="technologies__iconSection">
              <a href={demo}>
                <i className="technologies__iconSection--icon fa-solid fa-globe"></i>
              </a>
              <a href={repo}>
                <i className="technologies__iconSection--icon fa-brands fa-github"></i>
              </a>
            </section>
          </div>
        </section>

        <section className="info-autor">
          <img className="image" src={photo || girlUser} alt="userPhoto" />
          <p className="job">{job || 'Full Stack Developer'}</p>
          <p className="name">{autor || 'Emmelie Björklund'}</p>
        </section>
      </section>
    </section>
  );
};

export default Preview;
