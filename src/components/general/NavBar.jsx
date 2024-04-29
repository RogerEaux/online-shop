import Links from './Links';
import SearchBar from './SearchBar';
import logo from '../../assets/svg/logo.svg';
import cart from '../../assets/svg/cart.svg';
import burger from '../../assets/svg/burger.svg';
import { Link } from 'react-router-dom';
import styles from '../../styles/general/NavBar.module.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../App';
import useScroll from '../../utils/useScroll';

function NavBar() {
  const { toggleCart } = useContext(CartContext);
  const { isHidden } = useScroll();
  const [isMenuActive, setIsMenuActive] = useState(false);

  function toggleMenu() {
    if (isMenuActive) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  }

  return (
    <nav className={`${styles.navBar} ${isHidden ? styles.hidden : ''}`}>
      <Link
        to="/"
        className={`${styles.logo} ${isMenuActive ? styles.hidden : ''}`}
      >
        <img src={logo} alt="The Company" />
      </Link>
      <button className={styles.burgerButton} onClick={toggleMenu}>
        <img src={burger} alt="Menu" />
      </button>
      <div
        role="menu"
        className={`${styles.burgerMenu} ${isMenuActive ? styles.visible : ''}`}
      >
        <SearchBar />
        <Links direction="row" />
      </div>
      <button
        onClick={toggleCart}
        className={`${styles.cart} ${isMenuActive ? styles.hidden : ''}`}
      >
        <img src={cart} alt="Shopping Cart" />
      </button>
    </nav>
  );
}

export default NavBar;
