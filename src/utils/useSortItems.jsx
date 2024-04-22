import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function useSortItems() {
  const [sortOption, setSortOption] = useState('popular');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const sort = searchParams.get('sort');
    setSortOption(sort);
  }, [searchParams]);

  function updateOption(e) {
    setSearchParams({ ...searchParams, sort: e.target.value });
  }

  return { sortOption, updateOption };
}

export default useSortItems;
