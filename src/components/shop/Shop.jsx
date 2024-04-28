import { ScrollRestoration } from 'react-router-dom';
import NavBar from '../general/NavBar';
import Cart from '../general/Cart';
import Banner from './Banner';
import Main from './Main';
import Footer from '../general/Footer';

function Shop() {
  return (
    <>
      <ScrollRestoration />
      <NavBar />
      <Cart />
      <Banner />
      <Main />
      <Footer />
    </>
  );
}

export default Shop;
