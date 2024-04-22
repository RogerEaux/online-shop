import { Link } from 'react-router-dom';

function Categories() {
  return (
    <ul>
      <li>
        <Link to={'/shop/electronics'}>Electronics</Link>
      </li>
      <li>
        <Link to={'/shop/jewelery'}>Jewelery</Link>
      </li>
      <li>
        <Link to={'/shop/mens-clothing'}>Men&apos;s Clothing</Link>
      </li>
      <li>
        <Link to={'/shop/womens-clothing'}>Women&apos;s Clothing</Link>
      </li>
    </ul>
  );
}

export default Categories;
