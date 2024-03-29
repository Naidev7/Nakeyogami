// Fichero src/components/App.jsxx
import '../scss/App.scss';

import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Main from './Main';

import Footer from './Footer';
import localStorage from '../services/local';

function App() {
  const [card, setCard] = useState(
    localStorage.get('valueInputs', {
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      nameAutor: '',
      lastname: '',
      job: '',
      image: '',
      photo: '',
    })
  );

  //creamos una funcion encargada de meter clave valor en el formulario
  const handleCard = (key, value) => {
    setCard({ ...card, [key]: value });
  };

  useEffect(() => {
    localStorage.set('valueInputs', card);
  }, [card]);

  const handleReset = () => {
    console.log('estoy lista para resetear!');
    setCard({
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      nameAutor: '',
      lastname: '',
      job: '',
      image: '',
      photo: '',
    });
    localStorage.remove('valueInputs');
  };

  return (
    <div className="body">
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/main"
          element={
            <Main
              handleCard={handleCard}
              card={card}
              handleReset={handleReset}
            />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
