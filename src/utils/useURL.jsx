import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function useURL() {
  const base = 'https://fakestoreapi.com/products';
  const [url, setURL] = useState(base);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      if (category === 'mens-clothing') {
        setURL(`${base}/category/men's clothing`);
      } else if (category === 'womens-clothing') {
        setURL(`${base}/category/women's clothing`);
      } else {
        setURL(`${base}/category/${category}`);
      }
    } else {
      setURL(base);
    }
  }, [category]);

  return { url };
}

export default useURL;
