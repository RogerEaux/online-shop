import PropTypes from 'prop-types';
import styles from '../styles/CatAd.module.css';

function CatAd({ title, cover, reverse }) {
  function getImageURL() {
    return new URL(`../assets/${cover}`, import.meta.url).href;
  }

  return (
    <section role="section" className={reverse ? styles.reverse : styles.catAd}>
      <h2 className={styles.title}>{title}</h2>
      <img src={getImageURL(cover)} alt={title} className={styles.cover} />
    </section>
  );
}

export default CatAd;

CatAd.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  reverse: PropTypes.bool,
};
