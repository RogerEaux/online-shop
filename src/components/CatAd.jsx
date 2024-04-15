import PropTypes from 'prop-types';

function CatAd({ title }) {
  return (
    <section role="section">
      <h2>{title}</h2>
      <img src="" alt={title} />
    </section>
  );
}

export default CatAd;

CatAd.propTypes = {
  title: PropTypes.string,
};
