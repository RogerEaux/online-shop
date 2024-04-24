import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import Sorter from './Sorter';
import styles from '../../styles/shop/ItemGrid.module.css';
import { useSearchParams } from 'react-router-dom';
import sortItems from '../../utils/sortItems';

function ItemGrid({ items }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOption = searchParams.get('sort');
  const sortedItems = sortItems(items, sortOption);

  function updateOption(e) {
    setSearchParams({ ...searchParams, sort: e.target.value });
  }

  return (
    <article className={styles.itemGrid}>
      <p>{sortedItems.length} items</p>
      <Sorter updateOption={updateOption} />
      <section className={styles.items}>
        {sortedItems.map((item) => {
          return <ItemCard key={item.id} item={item} />;
        })}
      </section>
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
