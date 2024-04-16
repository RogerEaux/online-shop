import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-placeholder.png';
import github from '../assets/svg/github.svg';
import Links from './Links';

function Footer() {
  return (
    <footer>
      <img src={logo} alt="The Company" />
      <div>
        <h1 aria-label="about">About The Company</h1>
        <p>
          The Company is an online tech commerce seller. Our goal is to inspire
          people to use and take advantage of recent technologies. The Company
          offers some of the top and cutting-edge technology.
        </p>
      </div>
      <Links column={true} />
      <div>
        <Link to="/">
          <img src={github} alt="github" />
        </Link>
        <p>© 2024 RogerEaux. All Rights Reserved</p>
      </div>
      <p>Project made by RogerEaux using FakeStore API</p>
    </footer>
  );
}

export default Footer;
