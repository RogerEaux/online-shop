import Links from './Links';
import SearchBar from './SearchBar';
import logo from '../assets/logo-placeholder.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="Fake Company" />
      </Link>
      <SearchBar />
      <Links direction="row" />
    </>
  );
}

export default NavBar;
