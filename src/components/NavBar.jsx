import Links from './Links';
import SearchBar from './SearchBar';
import logo from '../assets/logo-placeholder.png';
import cart from '../assets/cart.svg';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="Fake Company" />
      </Link>
      <SearchBar />
      <Links direction="row" />
      <button>
        <img src={cart} alt="Shopping Cart" />
      </button>
    </>
  );
}

export default NavBar;
