import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function useFetchProduct() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { productId } = useParams();
  const url = `https://fakestoreapi.com/products/${productId ? productId : 1}`;

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Server Error');
        }
        return response.json();
      })
      .then((response) => setProduct(response))
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setError(error);
        }
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return { product, error };
}

export default useFetchProduct;
