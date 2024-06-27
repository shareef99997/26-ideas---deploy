/* eslint-disable jsx-a11y/anchor-is-valid */
import './Home.css';
import HEADER_EN from './Header-en/Header-en';
import SERVICES_EN from './Services-en/Services-en';
import OFFERS_EN from './Offers-en/Offers-en';
import ABOUT_EN from './About-en/About-en';
import FOOTER_EN from '../Home-en/Footer-en/Footer-en';
import STORE_EN from '../Home-en/Store-en/Store-en';
import CONTACT_EN from '../Home-en/Contact-en/Contact-en';
import LoadingScreen from '../../LoadingScreen/LoadingScreen';



function Home() {
  return (
    <div className="Home" lang="en">
      <LoadingScreen/>
      <HEADER_EN />
      <ABOUT_EN />
      <SERVICES_EN />
      <OFFERS_EN />
      <STORE_EN />
      <CONTACT_EN />
      <FOOTER_EN />
    </div>
  );
}

export default Home;
