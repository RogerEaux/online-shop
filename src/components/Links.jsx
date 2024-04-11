import PropTypes from 'prop-types';
import styles from '../styles/Links.module.css';
import { Link } from 'react-router-dom';

function Links({ direction }) {
  return (
    <>
      <ul className={`${styles[direction]}`}>
        <li className={styles.linksItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.linksItem}>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </>
  );
}

Links.propTypes = {
  direction: PropTypes.string,
};

export default Links;
