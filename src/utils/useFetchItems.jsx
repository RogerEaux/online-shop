import { useState, useEffect } from 'react';

function useFetchItems(url) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return { items, loading, error };
}

export default useFetchItems;
