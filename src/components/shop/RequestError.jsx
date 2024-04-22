import PropTypes from 'prop-types';
import styles from '../../styles/shop/RequestError.module.css';

function RequestError({ error, retry }) {
  return (
    <div className={styles.error}>
      <h2 aria-label="error">
        Oops! Looks like you&apos;ve encountered a {error.message}
      </h2>
      <button onClick={retry}>Retry</button>
    </div>
  );
}

export default RequestError;

RequestError.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  retry: PropTypes.func,
};
