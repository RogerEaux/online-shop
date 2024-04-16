import logo from '../assets/images/logo-placeholder.png';

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
    </footer>
  );
}

export default Footer;
