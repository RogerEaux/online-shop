import CatAd from './CatAd';
import styles from '../../styles/home/Main.module.css';

function Main() {
  return (
    <main className={styles.main}>
      <h1 aria-label="Promotional message">
        Do not hesitate. The time for innovation is <strong>NOW</strong>
      </h1>
      <CatAd
        id={12}
        title="Don't let storage stop the "
        keyWord="Gaming"
        description="Unleash your potential with WD's Gaming External HardDrive"
        cover={'gaming-drive.jpg'}
      />
      <CatAd
        id={5}
        title="A little touch of "
        keyWord="Elegance"
        description="Show off your fancy side with John Hardy's Naga Gold and Silver Bracelet"
        cover={'naga-bracelet.jpg'}
        reverse={true}
      />
    </main>
  );
}

export default Main;
