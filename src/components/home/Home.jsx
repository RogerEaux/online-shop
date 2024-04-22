import NavBar from '../general/NavBar';
import Banner from './Banner';
import Marquee from './Marquee';
import Main from './Main';
import Footer from '../general/Footer';
import { ScrollRestoration } from 'react-router-dom';

function Home() {
  return (
    <>
      <ScrollRestoration />
      <NavBar />
      <Banner />
      <Marquee />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
