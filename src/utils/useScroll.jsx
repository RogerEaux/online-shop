import { useEffect, useState } from 'react';

function useScroll() {
  const [previousScrollY, setPreviousScrollY] = useState(window.scrollY);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > previousScrollY && currentScrollY > 105) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setPreviousScrollY(currentScrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return { isHidden };
}

export default useScroll;
