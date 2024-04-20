import PropTypes from 'prop-types';

function ProductCard({ product }) {
  return (
    <section>
      <img src={product.image} alt="product image" />
      <h2 aria-label="title">{product.title}</h2>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }),
};
