import styles from "./SearchBar.styles.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBox}>
      <button className={styles.searchButton}>
        <span className={`material-icons ${styles.searchIcon}`}>search</span>
      </button>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search for notes"
      />
    </div>
  );
}

export { SearchBar };
