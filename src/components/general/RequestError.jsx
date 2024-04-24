import PropTypes from 'prop-types';
import styles from '../../styles/general/RequestError.module.css';
import { Link } from 'react-router-dom';

function RequestError({ errorMessage, path, actionButton }) {
  return (
    <div className={styles.error}>
      <h2 aria-label="error">Oops! Looks like {errorMessage}</h2>
      <Link to={path} aria-label="action">
        {actionButton}
      </Link>
    </div>
  );
}

export default RequestError;

RequestError.propTypes = {
  errorMessage: PropTypes.string,
  path: PropTypes.string,
  action: PropTypes.func,
  actionButton: PropTypes.string,
};
