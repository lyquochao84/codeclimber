import styles from './search-bar.module.css';

export default function SearchBar() {
  return (
    <>
      <input
        className={styles.search_bar}
        type="text"
        placeholder="Search"
      />
    </>
  );
}
