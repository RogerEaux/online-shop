import useFetchItems from '../../utils/useFetchItems';
import useURL from '../../utils/useURL';
import Categories from '../general/Categories';
import ItemGrid from './ItemGrid';
import loadingGIF from '../../assets/images/loading.gif';
import RequestError from './RequestError';

function Main() {
  const { url } = useURL();
  const { items, loading, error } = useFetchItems(url);

  if (loading) return <img src={loadingGIF} alt="loading" />;
  if (error) return <RequestError error={error} retry={location.reload} />;

  return (
    <main>
      <ItemGrid items={items} />
      <aside>
        <h2>Categories</h2>
        <Categories />
      </aside>
    </main>
  );
}

export default Main;
