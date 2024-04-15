import PropTypes from 'prop-types';
import styles from '../styles/CatAd.module.css';
import { Link } from 'react-router-dom';

function CatAd({ title, cover, reverse }) {
  function getImageURL() {
    return new URL(`../assets/${cover}`, import.meta.url).href;
  }

  return (
    <section role="section" className={reverse ? styles.reverse : styles.catAd}>
      <Link to={'/'} className={styles.cover}>
        <img src={getImageURL(cover)} alt={title} />
      </Link>
      <h2 className={styles.title}>{title}</h2>
    </section>
  );
}

export default CatAd;

CatAd.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  reverse: PropTypes.bool,
};
