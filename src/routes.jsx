import Home from './components/home/Home';
import Shop from './components/shop/Shop';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/shop/:category',
    element: <Shop />,
  },
];

export default routes;
