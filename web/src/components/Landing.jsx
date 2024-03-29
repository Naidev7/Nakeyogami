import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GalleryDetail from './GalleryDetail';

function Landing() {
  const { preview } = useParams();
  const [cardGalery, setCardGalery] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const url =
          'https://project-promo-v-module-4-team-2.onrender.com/api/projects';

        // 'http://localhost:5001/api/projects';
        const res = await fetch(url);
        const data = await res.json();
        setCardGalery(data.data);
      }
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // if (results.length !== 0) {
  //   conex.end();
  //   res.json({ success: true, data: results });
  // } else {
  //   res.status(401).json({ success: false, message: 'Ha habido un error' });
  // }

  const renderPreview = cardGalery.map((detailCard, index) => {
    return <GalleryDetail key={index} detailCard={detailCard} />;
  });

  return (
    <div>
      <div className="landing">
        <h2 className="landing__title">¡Hola!</h2>
        <h2 className="landing__title">Te damos la bienvenida a Nakeyogami </h2>
        <h3 className="landing__text">
          Escaparate en línea para recoger ideas a través de la tecnología.
        </h3>
        <Link className="landing__btn--link" to="/main">
          <button className="landing__btn ">Crear un Nuevo Proyecto </button>
        </Link>
        <div className="list">{renderPreview}</div>
      </div>
    </div>
  );
}

export default Landing;
