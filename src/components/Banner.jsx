import { Link } from 'react-router-dom';

function Banner() {
  return (
    <>
      <h1 aria-label="slogan">
        See into <strong>the future</strong>, experience it
        <strong> now</strong>
      </h1>
      <h2 aria-label="quote">
        Look into the future, because that is where you are going to spend the
        rest of your life
      </h2>
      <button>
        <Link to="./shop">Start Shopping</Link>
      </button>
    </>
  );
}

export default Banner;
