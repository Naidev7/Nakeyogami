import { useState } from 'react';
import '../scss/App.scss';
import callToApi from '../services/api';
import GetAvatar from './GetAvatar';


const Form = ({ handleCard, card }) => {
  const [url, setUrl] = useState();

  const handleCreateCard = (ev) => {
    ev.preventDefault();

    callToApi(card).then((data) => {
      setUrl(data.cardURL);
    });
  };

  const handleInput = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    handleCard(key, value);
   
  };

  return (
    <form className="form" onSubmit={handleCreateCard}>
      <h2 className="title">Información</h2>

      <section className="ask-info">
        <p className="subtitle">Cuéntanos sobre el proyecto</p>
        <hr className="line" />
      </section>

      <fieldset className="project">
        <input
          className="input"
          type="text"
          placeholder="Nombre del proyecto"
          name="name"
          id="name"
          onChange={handleInput} value={card.name}
          required
        />
        <input
          className="input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Eslogan"
          onChange={handleInput}  value={card.slogan}
          required
        />
        <input
          className="input"
          type="text"
          name="repo"
          id="repo"
          placeholder="Repo. https://github.com/nombre-usuarie/nombre-proyecto"
          onChange={handleInput}  value={card.repo}
          required
        />
        <input
          className="input"
          type="text"
          placeholder="Demo"
          name="demo"
          id="demo"
          onChange={handleInput}  value={card.demo}
          required
        />
        <input
          className="input"
          type="text"
          placeholder="Tecnologías"
          name="technologies"
          id="technologies"
          onChange={handleInput}  value={card.technologies}
          required
        />
        <textarea
          className="textarea"
          type="text"
          placeholder="Descripción"
          name="desc"
          id="desc"
          onChange={handleInput}  value={card.desc}
          required
        ></textarea>
      </fieldset>

      <section className="ask-info">
        <p className="subtitle">Cuéntanos sobre la autora</p>
        <hr className="line" />
      </section>

      <fieldset className="autor">
        <input
          className="input"
          type="text"
          placeholder="Nombre"
          name="autor"
          id="autor"
          onChange={handleInput}  value={card.autor}
          required
        />
        <input
          className="input"
          type="text"
          placeholder="Trabajo"
          name="job"
          id="job"
          onChange={handleInput}  value={card.job}
          required
        />
      </fieldset>

      <section>
        <GetAvatar
          updateAvatar={handleCard}
          text="Subir foto de la autora"
          nameInput="photo"
        />

        <GetAvatar
          updateAvatar={handleCard}
          text="Subir foto de proyecto"
          nameInput="image"
        />
      </section>
      <section className="buttons-img">
        <button className="btn-large" type="submit">
          Crear Tarjeta
        </button>
      </section>

      {url ? (
        <section className="card">
          <div className=""> La tarjeta ha sido creada: </div>
          <a href={url} className="card__url" target="_blank" rel="noreferrer">
            {url}
          </a>
        </section>
      ) : null}
    </form>
  );
};

export default Form;