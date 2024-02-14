// Fichero src/components/App.jsxx
import '../scss/App.scss';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Home from './Home';
import api from '../services/api';

function App() {
  const [card, setCard] = useState({});

  //creamos una funcion encargada de meter clave valor en el formulario
  const handleCard = (key, value) => {
    setCard({ ...card, [key]: value });
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing card={card} />} />
        <Route
          path="/home"
          element={<Home handleCard={handleCard} card={card} />}
        />
      </Routes>
    </div>
  );
}
export default App;
