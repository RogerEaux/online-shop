import useFetchItem from '../../utils/useFetchItem.jsx';

function ProductCard() {
  const { item, loading, error } = useFetchItem();

  return (
    <main>
      <img src={item.image} alt="product image" />
      <h1 aria-label="title">{item.title}</h1>
      <p>${item.price}</p>
    </main>
  );
}

export default ProductCard;
