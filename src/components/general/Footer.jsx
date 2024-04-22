import { Link } from 'react-router-dom';
import github from '../../assets/svg/github.svg';
import Links from './Links';
import Categories from './Categories';
import styles from '../../styles/general/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <h1 aria-label="about">ABOUT THE COMPANY</h1>
        <p>
          The Company is an online commerce seller. Our goal is to inspire
          through our modern and trendy products. The Company offers top-quality
          and some of the most recent in everything from electronics, clothes
          and jewelery.
        </p>
      </div>
      <div className={styles.categories}>
        <h2>SHOP</h2>
        <Categories />
      </div>
      <div className={styles.links}>
        <h2>EXPLORE</h2>
        <Links column={true} />
      </div>
      <div className={styles.author}>
        <div>
          <Link to="https://github.com/RogerEaux/shopping-cart">
            <img src={github} alt="github" />
          </Link>
          <p>© 2024 RogerEaux</p>
        </div>
        <p>
          <span>Project made using </span>
          <Link to="https://fakestoreapi.com">FakeStore API</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
