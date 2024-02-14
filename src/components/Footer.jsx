import '../scss/App.scss';
import LogoAdalab from '../images/LogoAdalab.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__logo" src={LogoAdalab} alt="" />
    </footer>
  );
};

export default Footer;
