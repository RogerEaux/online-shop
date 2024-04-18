import CatAd from './CatAd';
import styles from '../../styles/home/Main.module.css';

function Main() {
  return (
    <main className={styles.main}>
      <h1 aria-label="Promotional message">
        Do not hesitate. The time for innovation is <strong>NOW</strong>
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
