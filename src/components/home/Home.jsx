import { ScrollRestoration } from 'react-router-dom';
import NavBar from '../general/NavBar';
import Cart from '../general/Cart';
import Banner from './Banner';
import Marquee from './Marquee';
import Main from './Main';
import Footer from '../general/Footer';

function Home() {
  return (
    <>
      <ScrollRestoration />
      <NavBar />
      <Cart />
      <Banner />
      <Marquee />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
