import PropTypes from 'prop-types';
import styles from '../../styles/home/CatAd.module.css';
import { Link } from 'react-router-dom';

function CatAd({ title, description, cover, reverse }) {
  function getImageURL() {
    return new URL(`../../assets/images/${cover}`, import.meta.url).href;
  }

  return (
    <section role="section" className={reverse ? styles.reverse : styles.catAd}>
      <Link to={'/'} className={styles.cover}>
        <img src={getImageURL(cover)} alt={title} />
      </Link>
      <div className={styles.info}>
        <h2>{title}</h2>
        <h3>{description}</h3>
      </div>
    </section>
  );
}

export default CatAd;

CatAd.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  cover: PropTypes.string,
  reverse: PropTypes.bool,
};
