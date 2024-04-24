import useFetchItem from '../../utils/useFetchItem.jsx';

function ProductCard() {
  const { item, loading, error } = useFetchItem();

  return (
    <main>
      <img src={item.image} alt="product image" />
      <h1 aria-label="title">{item.title}</h1>
    </main>
  );
}

export default ProductCard;
