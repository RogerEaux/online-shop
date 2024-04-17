import CatAd from './CatAd';
import styles from '../styles/Main.module.css';

function Main() {
  return (
    <main className={styles.main}>
      <h1 aria-label="Promotional message">
        Take a look at some of the deals we have to offer!
      </h1>
      <CatAd
        title="Best Gaming PCs"
        description="Unleash your potential"
        cover={'gaming-pc.jpg'}
      />
      <CatAd
        title="Best Gaming PCs"
        description="Unleash your potential"
        cover={'gaming-pc.jpg'}
        reverse={true}
      />
    </main>
  );
}

export default Main;
