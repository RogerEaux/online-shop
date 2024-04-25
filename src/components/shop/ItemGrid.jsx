import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import Sorter from './Sorter';
import styles from '../../styles/shop/ItemGrid.module.css';
import { useSearchParams } from 'react-router-dom';
import sortItems from '../../utils/sortItems';

function ItemGrid({ items }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOption = searchParams.get('sort');
  const searchOption = searchParams.get('search');
  const searchedItems = items.filter((item) => {
    if (!searchOption) return true;
    return (
      item.title.toLowerCase().includes(searchOption.toLowerCase()) ||
      item.description.toLowerCase().includes(searchOption.toLowerCase())
    );
  });
  const sortedItems = sortItems(searchedItems, sortOption);

  function updateOption(e) {
    setSearchParams({ ...searchParams, sort: e.target.value });
  }

  return (
    <article className={styles.itemGrid}>
      <p>{sortedItems.length} items</p>
      <Sorter updateOption={updateOption} />
      {sortedItems.length !== 0 ? (
        <section className={styles.items}>
          {sortedItems.map((item) => {
            return <ItemCard key={item.id} item={item} />;
          })}
        </section>
      ) : (
        <h2 className={styles.noItems}>We are all out of those...</h2>
      )}
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
