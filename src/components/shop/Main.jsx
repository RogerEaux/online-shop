import useFetchItems from '../../utils/useFetchItems';
import useURL from '../../utils/useURL';
import Categories from '../general/Categories';
import ItemGrid from './ItemGrid';
import loadingGIF from '../../assets/images/loading.gif';
import RequestError from './RequestError';
import styles from '../../styles/shop/Main.module.css';

function Main() {
  function retry() {
    location.reload();
  }

  const { url } = useURL();
  const { items, loading, error } = useFetchItems(url);

  return (
    <main className={styles.main}>
      <aside className={styles.categories}>
        <div>
          <h2>Categories</h2>
          <Categories />
        </div>
      </aside>
      {loading ? (
        <div className={styles.loading}>
          <img src={loadingGIF} alt="loading" />
        </div>
      ) : error ? (
        <RequestError error={error} retry={retry} />
      ) : (
        <ItemGrid items={items} />
      )}
    </main>
  );
}

export default Main;
