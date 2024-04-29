import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function useFetchProduct() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productId } = useParams();
  const url = `https://fakestoreapi.com/products/${productId ? productId : 1}`;

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
        setProduct(response);
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

  return { product, loading, error };
}

export default useFetchProduct;
