import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import Sorter from './Sorter';
import styles from '../../styles/shop/ItemGrid.module.css';
import { useSearchParams } from 'react-router-dom';

function ItemGrid({ items }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOption = searchParams.get('sort');

  function updateOption(e) {
    setSearchParams({ ...searchParams, sort: e.target.value });
  }

  function sortByRate(items) {
    items.sort((a, b) => {
      if (a.rating.rate < b.rating.rate) return 1;
      if (a.rating.rate > b.rating.rate) return -1;
      return 0;
    });
  }

  function sortByPriceLowToHigh(items) {
    items.sort((a, b) => {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    });
  }

  function sortByPriceHighToLow(items) {
    items.sort((a, b) => {
      if (a.price < b.price) return 1;
      if (a.price > b.price) return -1;
      return 0;
    });
  }

  function sortByTitleAToZ(items) {
    items.sort((a, b) => a.title.localeCompare(b.title));
  }

  function sortByTitleZToA(items) {
    items.sort((a, b) => b.title.localeCompare(a.title));
  }

  if (sortOption === 'popular' || !sortOption) sortByRate(items);
  if (sortOption === 'priceltoh') sortByPriceLowToHigh(items);
  if (sortOption === 'pricehtol') sortByPriceHighToLow(items);
  if (sortOption === 'atoz') sortByTitleAToZ(items);
  if (sortOption === 'ztoa') sortByTitleZToA(items);

  return (
    <article className={styles.itemGrid}>
      <p>{items.length} items</p>
      <Sorter updateOption={updateOption} />
      <section className={styles.items}>
        {items.map((item) => {
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
