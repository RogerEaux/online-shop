import useFetchProduct from '../../utils/useFetchProduct.jsx';
import Rating from '../general/Rating.jsx';
import loadingGIF from '../../assets/images/loading.gif';
import RequestError from '../general/RequestError';

function ProductCard() {
  function retry() {
    location.reload();
  }

  const { product, loading, error } = useFetchProduct();

  return (
    <main>
      {loading ? (
        <div>
          <img src={loadingGIF} alt="loading" />
        </div>
      ) : error ? (
        <RequestError error={error} retry={retry} />
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
