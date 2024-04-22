import { Link } from 'react-router-dom';
import styles from '../../styles/general/Categories.module.css';

function Categories() {
  return (
    <ul className={styles.categories}>
      <li className={styles.category}>
        <Link to={'/shop'}>All Categories</Link>
      </li>
      <li className={styles.category}>
        <Link to={'/shop/electronics'}>Electronics</Link>
      </li>
      <li className={styles.category}>
        <Link to={'/shop/jewelery'}>Jewelery</Link>
      </li>
      <li className={styles.category}>
        <Link to={'/shop/mens-clothing'}>Men&apos;s Clothing</Link>
      </li>
      <li className={styles.category}>
        <Link to={'/shop/womens-clothing'}>Women&apos;s Clothing</Link>
      </li>
    </ul>
  );
}

export default Categories;
