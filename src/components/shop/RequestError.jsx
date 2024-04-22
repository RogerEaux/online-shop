import PropTypes from 'prop-types';

function RequestError({ error }) {
  return (
    <div>
      <h2 aria-label="error">
        Oops! Looks like you&apos;ve encountered a {error.message}
      </h2>
    </div>
  );
}

export default RequestError;

RequestError.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};
