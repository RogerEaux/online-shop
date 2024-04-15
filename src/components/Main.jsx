import CatAd from './CatAd';
import styles from '../styles/Main.module.css';

function Main() {
  return (
    <main className={styles.main}>
      <CatAd title="Best Gaming PCs" cover={'gaming-pc.jpg'} />
      <CatAd title="Best Gaming PCs" cover={'gaming-pc.jpg'} reverse={true} />
    </main>
  );
}

export default Main;
