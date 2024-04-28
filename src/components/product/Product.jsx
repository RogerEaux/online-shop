import { ScrollRestoration } from 'react-router-dom';
import NavBar from '../general/NavBar';
import Cart from '../general/Cart';
import ProductCard from './ProductCard';
import Footer from '../general/Footer';

function Product() {
  return (
    <>
      <ScrollRestoration />
      <NavBar />
      <Cart />
      <ProductCard />
      <Footer />
    </>
  );
}

export default Product;
