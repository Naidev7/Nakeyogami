import '../scss/App.scss';
import Form from './Form';
import Preview from './Preview';

const Main = ({ handleCard, card }) => {
  return (
    <main className="main">
      <Preview card={card} />
      <Form handleCard={handleCard} card={card}/>
    </main>
  );
};

export default Main;
