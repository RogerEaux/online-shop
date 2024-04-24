import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function useFetchItem() {
  const [item, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productId } = useParams();
  const url = `https://fakestoreapi.com/products/${productId}`;

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Server Error');
        }
        return response.json();
      })
      .then((response) => setItems(response))
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setError(error);
        }
      })
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, [url]);

  return { item, loading, error };
}

export default useFetchItem;
