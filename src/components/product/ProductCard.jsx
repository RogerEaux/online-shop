import useFetchProduct from '../../utils/useFetchProduct.jsx';
import Rating from '../general/Rating.jsx';
import loadingGIF from '../../assets/images/loading.gif';
import RequestError from '../general/RequestError';

function ProductCard() {
  function retry() {
    location.reload();
  }

  const { product, error } = useFetchProduct();

  return (
    <main>
      {!product ? (
        <div>
          <img src={loadingGIF} alt="loading" />
        </div>
      ) : error ? (
        <RequestError error={error} retry={retry} />
      ) : (
        <>
          <img src={product.image} alt="product image" />
          <h1 aria-label="title">{product.title}</h1>
          <p>${product.price}</p>
          <h2 aria-label="description">{product.description}</h2>
          <Rating rating={product.rating} />
        </>
      )}
    </main>
  );
}

export default ProductCard;
