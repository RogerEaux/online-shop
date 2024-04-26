import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../assets/svg/search.svg';
import styles from '../../styles/general/SearchBar.module.css';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  function handleSearchValue(e) {
    setSearchValue(e.target.value);
  }

  function search() {
    navigate(`/shop?search=${searchValue}`);
  }

  function searchEnter(e) {
    if (e.key === 'Enter') {
      search();
    }
  }

  return (
    <>
      <label className={styles.search} aria-label="search">
        <input
          onChange={handleSearchValue}
          onKeyDown={searchEnter}
          className={styles.searchBox}
          type="text"
          id="searchBox"
          value={searchValue}
          placeholder="Search for item..."
        />
        <button onClick={search} className={styles.searchButton}>
          <img src={searchIcon} alt="Search" />
        </button>
      </label>
    </>
  );
}

export default SearchBar;
