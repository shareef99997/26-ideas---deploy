/* eslint-disable jsx-a11y/anchor-is-valid */
import './Home.css';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import HEADER from './Header/Header';
import ABOUT from './About/About';
import SERVICES from './Services/Services';
import OFFERS from './Offers/Offers';
import STORE from './Store/Store';
import CONTACT from '../Home/Contact/Contact';
import FOOTER from '../Home/Footer/Footer';


function Home() {
  return (
    <div className="Home" lang="ar">
      <LoadingScreen />
      <HEADER />
      <ABOUT />
      <SERVICES />
      <OFFERS />
      <STORE />
      <CONTACT />
      <FOOTER />
    </div>
  );
}

export default Home;
