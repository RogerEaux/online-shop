import Home from './components/home/Home';
import Product from './components/product/Product';
import Shop from './components/shop/Shop';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/shop',
    element: <Shop />,
    children: [{ path: ':category', element: <Shop /> }],
  },
  {
    path: '/product/:productId',
    element: <Product />,
  },
];

export default routes;
