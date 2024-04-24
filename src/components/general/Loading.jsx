import loadingGIF from '../../assets/images/loading.gif';
import styles from '../../styles/general/Loading.module.css';

function Loading() {
  return (
    <div className={styles.loading}>
      <img src={loadingGIF} alt="loading" />
    </div>
  );
}

export default Loading;
