import '../scss/App.scss';
import Form from './Form';
import Preview from './Preview';
import { Link } from 'react-router-dom';

const Main = ({ handleCard, card, setCard }) => {
  return (
    <main className="main">
      <Link to="/">
        <button className="header__text--btn">VER PROYECTOS</button>
      </Link>

      <Preview card={card} />
      <Form handleCard={handleCard} card={card} setCard={setCard} />
    </main>
  );
};

export default Main;
