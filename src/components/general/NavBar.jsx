import Links from './Links';
import SearchBar from './SearchBar';
import logo from '../../assets/svg/logo.svg';
import cart from '../../assets/svg/cart.svg';
import { Link } from 'react-router-dom';
import styles from '../../styles/general/NavBar.module.css';
import { useContext } from 'react';
import { CartContext } from '../../App';
import useScroll from '../../utils/useScroll';

function NavBar() {
  const { toggleCart } = useContext(CartContext);
  const { isHidden } = useScroll();

  return (
    <nav className={`${styles.navBar} ${isHidden ? styles.hidden : ''}`}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="The Company" />
      </Link>
      <SearchBar />
      <Links direction="row" />
      <button onClick={toggleCart} className={styles.cart}>
        <img src={cart} alt="Shopping Cart" />
      </button>
    </nav>
  );
}

export default NavBar;
