import '../scss/App.scss';
import Form from './Form';
import Preview from './Preview';
import { Link } from 'react-router-dom';

const Main = ({ handleCard, card }) => {
  return (
    <main className="main">
      <Link to="/">
        <button className="listProjectBtn">VER PROYECTOS</button>
      </Link>

      <Preview card={card} />
      <Form handleCard={handleCard} card={card} />
    </main>
  );
};

export default Main;
