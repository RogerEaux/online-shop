import { ScrollRestoration } from 'react-router-dom';
import NavBar from '../general/NavBar';
import ProductCard from './ProductCard';
import Footer from '../general/Footer';

function Product() {
  return (
    <>
      <ScrollRestoration />
      <NavBar />
      <ProductCard />
      <Footer />
    </>
  );
}

export default Product;
