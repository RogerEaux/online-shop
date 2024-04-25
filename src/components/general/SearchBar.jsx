import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../assets/svg/search.svg';
import styles from '../../styles/general/SearchBar.module.css';

function SearchBar() {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  function search() {
    navigate(`/shop?search=${inputRef.current.value}`);
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
          onKeyDown={searchEnter}
          ref={inputRef}
          className={styles.searchBox}
          type="text"
          id="searchBox"
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
