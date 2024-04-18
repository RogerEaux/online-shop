import { Link } from 'react-router-dom';
import future from '../assets/images/future.jpg';
import rightArrow from '../assets/svg/right-arrow.svg';
import styles from '../styles/Banner.module.css';

function Banner() {
  return (
    <header className={styles.banner}>
      <h1 className={styles.slogan} aria-label="slogan">
        <span>See into</span>
        <span>
          <strong> the future, </strong>
        </span>
        <span>
          use it
          <strong> now</strong>
        </span>
      </h1>
      <h2 className={styles.quote} aria-label="quote">
        Look into the future, because that is where you are going to spend the
        rest of your life
      </h2>
      <div className={styles.shop}>
        <Link to="./shop">Start Shopping</Link>
        <img aria-hidden src={rightArrow} alt="arrow" />
        <img aria-hidden src={rightArrow} alt="arrow" />
        <img aria-hidden src={rightArrow} alt="arrow" />
      </div>
      <img
        className={styles.future}
        src={future}
        alt="Tunnel looking into the future"
      />
    </header>
  );
}

export default Banner;
