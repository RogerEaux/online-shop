import PropTypes from 'prop-types';

function ProductCard({ product }) {
  return (
    <section>
      <img src={product.image} alt="product image" />
      <h2 aria-label="title">{product.title}</h2>
      <p>${product.price}</p>
    </section>
  );
}

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

export default ProductCard;
