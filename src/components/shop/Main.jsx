import useFetchItems from '../../utils/useFetchItems';
import ItemGrid from './ItemGrid';
import { useState } from 'react';

function Main() {
  const [url, setURL] = useState('https://fakestoreapi.com/products');
  const { items, loading, error } = useFetchItems(url);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <main>
      <ItemGrid items={items} />
    </main>
  );
}

export default Main;
