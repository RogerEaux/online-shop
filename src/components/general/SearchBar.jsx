import searchIcon from '../../assets/svg/search.svg';
import styles from '../../styles/general/SearchBar.module.css';

function SearchBar() {
  return (
    <>
      <label className={styles.search} aria-label="search">
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
