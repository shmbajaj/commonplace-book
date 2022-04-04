import { SearchBar } from "../SearchBar/SearchBar";
import { NoteList } from "../NoteList/NoteList";
import styles from "./FilterBar.styles.module.css";
import { useNotes } from "context";

function FilterBar() {
  const { notesState } = useNotes();
  const { notes } = notesState;
  return (
    <aside className={styles.filterBar}>
      <div className={styles.filterSection}>
        <SearchBar />
        <button className={styles.filterButton}>
          <span className={`material-icons ${styles.filterIcon}`}>
            filter_list
          </span>
        </button>
      </div>
      {notes && <NoteList list={notes} />}
    </aside>
  );
}

export { FilterBar };
