import useFetchProduct from '../../utils/useFetchProduct.jsx';
import Rating from '../general/Rating.jsx';
import RequestError from '../general/RequestError';
import Loading from '../general/Loading.jsx';
import styles from '../../styles/product/ProductCard.module.css';
import { useContext } from 'react';
import { CartContext } from '../../App.jsx';

function ProductCard() {
  const { product, loading, error } = useFetchProduct();
  const { addItem } = useContext(CartContext);

  function handleAddToCart() {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }

  return (
    <main className={styles.productCard}>
      {loading ? (
        <Loading />
      ) : error ? (
        <RequestError
          errorMessage={"this product doesn't exist"}
          path={'/shop'}
          actionButton={'Go back'}
        />
      ) : product ? (
        <>
          <div className={styles.image}>
            <img src={product.image} alt="product image" />
          </div>
          <div className={styles.details}>
            <h1 aria-label="title">{product.title}</h1>
            <Rating rating={product.rating} />
            <p>${product.price}</p>
            <h2 aria-label="description">{product.description}</h2>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </>
      ) : null}
    </main>
  );
}

export default ProductCard;
