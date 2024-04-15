import PropTypes from 'prop-types';

function CatAd({ title, cover }) {
  function getImageURL() {
    return new URL(`../assets/${cover}`, import.meta.url).href;
  }

  return (
    <section role="section">
      <h2>{title}</h2>
      <img src={getImageURL(cover)} alt={title} />
    </section>
  );
}

export default CatAd;

CatAd.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
};
