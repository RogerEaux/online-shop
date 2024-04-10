import searchIcon from '../assets/search.svg';

function SearchBar() {
  return (
    <>
      <label>
        <input type="text" id="searchBox" placeholder="Search for item..." />
        <button>
          <img src={searchIcon} alt="Search" />
        </button>
      </label>
    </>
  );
}

export default SearchBar;
