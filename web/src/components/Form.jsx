import { useState } from "react";
import "../scss/App.scss";
import callToApi from "../services/api";
import GetAvatar from "./GetAvatar";
import localStorage from "../services/local";

const Form = ({ handleCard, card, handleReset }) => {
  const [url, setUrl] = useState();

  const handleCreateCard = (ev) => {
    ev.preventDefault();
    console.log("me han clicado");

    callToApi(card).then((data) => {
      setUrl(data.cardURL);
      console.log("me han data");
    });
  };

  const handleInput = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    handleCard(key, value);
  };

 /*  const handleReset = (e) => {
    e.preventDefault();
    console.log("estoy lista para resetear!");    
    handleCard({
      name: "",
      slogan: "",
      repo: "",
      demo: "",
      technologies: "",
      desc: "",
      nameAutor: "",
      lastname: "",
      job: "",
      image: "",
      photo: "",
    });
    setUrl("");
    localStorage.removeItem("valueInputs");
    handleInput("");
  }; */


  return (
    <>
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
            onChange={handleInput}
            value={card.name}
            required
          />
          <input
            className="input"
            type="text"
            name="slogan"
            id="slogan"
            placeholder="Eslogan"
            onChange={handleInput}
            value={card.slogan}
            required
          />
          <input
            className="input"
            type="text"
            name="repo"
            id="repo"
            placeholder="Repo. https://github.com/nombre-usuarie/nombre-proyecto"
            onChange={handleInput}
            value={card.repo}
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Demo"
            name="demo"
            id="demo"
            onChange={handleInput}
            value={card.demo}
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Tecnologías"
            name="technologies"
            id="technologies"
            onChange={handleInput}
            value={card.technologies}
            required
          />
          <textarea
            className="textarea"
            type="text"
            placeholder="Descripción"
            name="desc"
            id="desc"
            onChange={handleInput}
            value={card.desc}
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
            name="nameAutor"
            id="nameAutor"
            onChange={handleInput}
            value={card.nameAutor}
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Apellido"
            name="lastname"
            id="lastname"
            onChange={handleInput}
            value={card.lastname}
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Trabajo"
            name="job"
            id="job"
            onChange={handleInput}
            value={card.job}
            required
          />
        </fieldset>

        <section>
          <GetAvatar
            updateAvatar={handleCard}
            text="Subir foto de la autora"
            nameInput="photo"
            value={card.photo}
          />

          <GetAvatar
            updateAvatar={handleCard}
            text="Subir foto de proyecto"
            nameInput="image"
            value={card.image}
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
            <a
              href={url}
              className="card__url"
              target="_blank"
              rel="noreferrer"
            >
              {url}
            </a>
          </section>
        ) : null}
      </form>
      <button onClick={handleReset}>resetea</button>
    </>
  );
};

export default Form;
