import searchIcon from '../assets/search.svg';
import styles from '../styles/SearchBar.module.css';

function SearchBar() {
  return (
    <>
      <label className={styles.search}>
        <input
          className={styles.searchBox}
          type="text"
          id="searchBox"
          placeholder="Search for item..."
        />
        <button className={styles.searchButton}>
          <img src={searchIcon} alt="Search" />
        </button>
      </label>
    </>
  );
}

export default SearchBar;
