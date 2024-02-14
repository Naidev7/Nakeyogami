// Fichero src/components/App.jsxx
import '../scss/App.scss';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Main from './Main';

import Detail from './Detail';
import Footer from './Footer';

function App() {
  const [card, setCard] = useState({});

  //creamos una funcion encargada de meter clave valor en el formulario
  const handleCard = (key, value) => {
    setCard({ ...card, [key]: value });
  };

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Landing card={card} />} />
        <Route
          path="/main"
          element={<Main handleCard={handleCard} card={card} />}
        />
        <Route path="/detail" element={<Detail card={card} />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
