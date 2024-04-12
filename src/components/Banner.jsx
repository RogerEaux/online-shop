import { Link } from 'react-router-dom';
import future from '../assets/future.jpg';
import styles from '../styles/Banner.module.css';

function Banner() {
  return (
    <header className={styles.banner}>
      <h1 className={styles.slogan} aria-label="slogan">
        See into{' '}
        <span>
          <strong>the future, </strong>
        </span>
        use it
        <span>
          <strong> now</strong>
        </span>
      </h1>
      <h2 className={styles.quote} aria-label="quote">
        Look into the future, because that is where you are going to spend the
        rest of your life
      </h2>
      <Link className={styles.shop} to="./shop">
        Start Shopping
      </Link>
      <img
        className={styles.future}
        src={future}
        alt="Tunnel looking into the future"
      />
    </header>
  );
}

export default Banner;
