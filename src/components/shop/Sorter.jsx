function Sorter() {
  return (
    <>
      <label htmlFor="sort">Sort by</label>
      <select name="sort" id="sort">
        <option value="">Popularity</option>
        <option value="priceltoh">Price Low to High</option>
        <option value="pricelhtol">Price High to Low</option>
        <option value="atoz">A to Z</option>
        <option value="ztoa">Z to A</option>
      </select>
    </>
  );
}

export default Sorter;
