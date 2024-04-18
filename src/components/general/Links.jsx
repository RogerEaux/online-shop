import PropTypes from 'prop-types';
import styles from '../../styles/general/Links.module.css';
import { Link } from 'react-router-dom';

function Links({ column }) {
  return (
    <>
      <ul className={column ? styles.column : styles.linksList}>
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
  column: PropTypes.bool,
};

export default Links;
