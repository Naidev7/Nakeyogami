import '../scss/App.scss';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function Home({ handleCard, card }) {
  return (
    <div className="container">
      <Header />
      <Main handleCard={handleCard} card={card} />

      <Footer />
    </div>
  );
}

export default Home;
