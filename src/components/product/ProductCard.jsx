import useFetchProduct from '../../utils/useFetchProduct.jsx';

function ProductCard() {
  const { product, loading, error } = useFetchProduct();

  return (
    <main>
      <img src={product.image} alt="product image" />
      <h1 aria-label="title">{product.title}</h1>
      <p>${product.price}</p>
      <h2 aria-label="description">{product.description}</h2>
    </main>
  );
}

export default ProductCard;
