import NavBar from '../general/NavBar';
import Banner from './Banner';
import Main from './Main';
import Footer from '../general/Footer';
import { ScrollRestoration } from 'react-router-dom';

function Shop() {
  return (
    <>
      <ScrollRestoration />
      <NavBar />
      <Banner />
      <Main />
      <Footer />
    </>
  );
}

export default Shop;
