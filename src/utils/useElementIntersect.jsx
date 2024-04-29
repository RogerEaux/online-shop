import { useEffect, useRef, useState } from 'react';

function useElementIntersect() {
  const catAdRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  function handleIntersect(entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  }

  useEffect(() => {
    const catAd = catAdRef.current;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.75,
    });
    if (catAd) observer.observe(catAd);

    return () => {
      if (catAd) observer.unobserve(catAd);
    };
  }, []);

  return { catAdRef, isVisible };
}

export default useElementIntersect;
