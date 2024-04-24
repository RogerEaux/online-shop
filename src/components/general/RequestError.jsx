import PropTypes from 'prop-types';
import styles from '../../styles/general/RequestError.module.css';

function RequestError({ error, action, actionButton }) {
  return (
    <div className={styles.error}>
      <h2 aria-label="error">Oops! Looks like {error.message}</h2>
      <button aria-label="action" onClick={action}>
        {actionButton}
      </button>
    </div>
  );
}

export default RequestError;

RequestError.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  action: PropTypes.func,
  actionButton: PropTypes.string,
};
