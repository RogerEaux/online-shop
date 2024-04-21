import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import Sorter from './Sorter';
import { useState } from 'react';

function ItemGrid({ items }) {
  const [sortOption, setSortOption] = useState('');

  function updateOption(e) {
    setSortOption(e.target.value);
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

  if (sortOption === 'priceltoh') sortByPriceLowToHigh(items);
  if (sortOption === 'pricehtol') sortByPriceHighToLow(items);
  if (sortOption === 'atoz') sortByTitleAToZ(items);

  return (
    <article>
      <p>{items.length} items</p>
      <Sorter updateOption={updateOption} />
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
