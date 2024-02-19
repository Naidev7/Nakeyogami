// Fichero src/components/App.jsxx
import '../scss/App.scss';

import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Main from './Main';

import Detail from './Detail';
import Footer from './Footer';
import localStorage from "../services/local";


function App() {
  const [card, setCard] = useState(  localStorage.get("valueInputs"),{});

  //creamos una funcion encargada de meter clave valor en el formulario
  const handleCard = (key, value) => {
    setCard({ ...card, [key]: value });
  };


  useEffect(()=>{
    localStorage.set("valueInputs", card)
  }
  ,[card])

  return (
    <div className='body'>
      <Header />

      <Routes>
        <Route path="/" element={<Landing card={card} />} />
        <Route
          path="/main"
          element={<Main handleCard={handleCard} card={card} setCard={setCard} />}
        />
        <Route path="/detail" element={<Detail card={card} />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
