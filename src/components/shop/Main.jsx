import useFetchItems from '../../utils/useFetchItems';
import useURL from '../../utils/useURL';
import Categories from '../general/Categories';
import ItemGrid from './ItemGrid';

function Main() {
  const { url } = useURL();
  const { items, loading, error } = useFetchItems(url);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <main>
      <ItemGrid items={items} />
      <aside>
        <Categories />
      </aside>
    </main>
  );
}

export default Main;
