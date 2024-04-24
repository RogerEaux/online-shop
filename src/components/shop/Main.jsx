import useFetchCategory from '../../utils/useFetchCategory';
import Categories from '../general/Categories';
import ItemGrid from './ItemGrid';
import Loading from '../general/Loading';
import RequestError from '../general/RequestError';
import styles from '../../styles/shop/Main.module.css';

function Main() {
  const { items, loading, error } = useFetchCategory();

  return (
    <main className={styles.main}>
      <aside className={styles.categories}>
        <div>
          <h2>Categories</h2>
          <Categories />
        </div>
      </aside>
      {loading ? (
        <Loading />
      ) : error ? (
        <RequestError
          errorMessage={"the server didn't respond"}
          path={'./'}
          actionButton={'Retry'}
        />
      ) : (
        <ItemGrid items={items} />
      )}
    </main>
  );
}

export default Main;
