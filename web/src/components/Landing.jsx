import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GalleryDetail from './GalleryDetail';

function Landing({ card }) {
  const { preview } = useParams();
  const [cardGalery, setCardGalery] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const url = 'http://localhost:5001/api/projects';
        const res = await fetch(url);
        const data = await res.json();
        setCardGalery(data.data);
        console.log(data);
      }
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const renderPreview = cardGalery.map((detailCard, index) => {
    return <GalleryDetail key={index} detailCard={detailCard} />;
  });

  return (
    <div>
      <div className="landing">
        <h2 className="landing__title">¡Hola!</h2>
        <h2 className="landing__title">
          Te damos la bienvenida a Proyectos Molones{' '}
        </h2>
        <h3 className="landing__text">
          Escaparate en línea para recoger ideas a través de la tecnología.
        </h3>
        <Link className="landing__btn--link" to="/main">
          <button className="landing__btn ">Crear un Nuevo Proyecto </button>
        </Link>
        <div className="gallery">{renderPreview}</div>
      </div>
    </div>
  );
}

export default Landing;
