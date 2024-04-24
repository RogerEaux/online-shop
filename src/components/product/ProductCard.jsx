import useFetchProduct from '../../utils/useFetchProduct.jsx';
import Rating from '../general/Rating.jsx';
import RequestError from '../general/RequestError';
import Loading from '../general/Loading.jsx';

function ProductCard() {
  const { product, loading, error } = useFetchProduct();

  return (
    <main>
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
          <img src={product.image} alt="product image" />
          <h1 aria-label="title">{product.title}</h1>
          <p>${product.price}</p>
          <h2 aria-label="description">{product.description}</h2>
          <Rating rating={product.rating} />
        </>
      ) : null}
    </main>
  );
}

export default ProductCard;
