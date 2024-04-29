import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function useFetchCategory() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();
  const base = 'https://fakestoreapi.com/products';
  let url = base;

  if (category) {
    if (category === 'mens-clothing') {
      url = `${base}/category/men's clothing`;
    } else if (category === 'womens-clothing') {
      url = `${base}/category/women's clothing`;
    } else {
      url = `${base}/category/${category}`;
    }
  }

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
      .then((response) => {
        setItems(response);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setError(error);
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return { items, loading, error };
}

export default useFetchCategory;
