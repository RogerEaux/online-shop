import { Link } from 'react-router-dom';

function Banner() {
  return (
    <>
      <h1 aria-label="slogan">
        Look into <strong>the future</strong>, experience it
        <strong> now</strong>
      </h1>
      <button>
        <Link>Start Shopping</Link>
      </button>
    </>
  );
}

export default Banner;
