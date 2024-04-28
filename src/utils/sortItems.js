function sortItems(items, sortOption) {
  const sortedItems = [...items];

  if (sortOption === 'popular' || !sortOption) {
    sortedItems.sort((a, b) => {
      if (a.rating.rate < b.rating.rate) return 1;
      if (a.rating.rate > b.rating.rate) return -1;
      return 0;
    });
  } else if (sortOption === 'priceltoh') {
    sortedItems.sort((a, b) => {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    });
  } else if (sortOption === 'pricehtol') {
    sortedItems.sort((a, b) => {
      if (a.price < b.price) return 1;
      if (a.price > b.price) return -1;
      return 0;
    });
  } else if (sortOption === 'atoz') {
    sortedItems.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === 'ztoa') {
    sortedItems.sort((a, b) => b.title.localeCompare(a.title));
  }

  return sortedItems;
}

export default sortItems;
