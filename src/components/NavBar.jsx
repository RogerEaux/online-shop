import Links from './Links';
import SearchBar from './SearchBar';
import logo from '../assets/svg/logo.svg';
import cart from '../assets/svg/cart.svg';
import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="The Company" />
      </Link>
      <SearchBar />
      <Links direction="row" />
      <button className={styles.cart}>
        <img src={cart} alt="Shopping Cart" />
      </button>
    </nav>
  );
}

export default NavBar;
