import styles from '../../styles/shop/Sorter.module.css';
import PropTypes from 'prop-types';

function Sorter({ updateOption }) {
  return (
    <div className={styles.sorter}>
      <label htmlFor="sort">Sort by</label>
      <select name="sort" id="sort" onChange={updateOption}>
        <option value="popular">Popular</option>
        <option value="priceltoh">Price Low to High</option>
        <option value="pricehtol">Price High to Low</option>
        <option value="atoz">A to Z</option>
        <option value="ztoa">Z to A</option>
      </select>
    </div>
  );
}

Sorter.propTypes = {
  updateOption: PropTypes.func,
};

export default Sorter;
