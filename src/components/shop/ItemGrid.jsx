import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

function ItemGrid({ items }) {
  return (
    <article>
      <p>{items.length} items</p>
      {items.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </article>
  );
}

ItemGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
      rating: PropTypes.shape({
        rate: PropTypes.number,
        count: PropTypes.number,
      }),
    }),
  ),
};

export default ItemGrid;
