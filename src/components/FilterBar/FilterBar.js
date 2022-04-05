import { SearchBar } from "../SearchBar/SearchBar";
import { NoteList } from "../NoteList/NoteList";
import { Filters } from "./Filters/Filters";
import styles from "./FilterBar.styles.module.css";
import { useNotes, useFilterBar } from "context";
import { useState, useEffect } from "react";

function FilterBar() {
  const { notesState } = useNotes();
  // const filteredNotes = notes;
  const [filteredNotes, setFilteredNotes] = useState([]);
  const { filterState, dispatch, inPriorirtyNotes, sortByCreatedOn } =
    useFilterBar();

  function getFilteredNotes(notes, filterState) {
    const priorirtizedNotes = inPriorirtyNotes(notes, filterState.inPriorirty);
    const sortedNotes = sortByCreatedOn(priorirtizedNotes, filterState.sortBy);
    return sortedNotes;
  }

  useEffect(() => {
    const { notes } = notesState;
    const filteredNotes = getFilteredNotes(notes, filterState);
    setFilteredNotes(filteredNotes);
  }, [notesState, filterState]);

  return (
    <aside className={styles.filterBar}>
      <div className={styles.filterSection}>
        <SearchBar />
        <button
          onClick={() =>
            dispatch({ type: "TOGGLE_FILTER_VIEW", payload: "grid" })
          }
          className={styles.filterButton}
        >
          <span className={`material-icons ${styles.filterIcon}`}>
            filter_list
          </span>
        </button>
      </div>
      {filteredNotes && <NoteList list={filteredNotes} />}
      <Filters />
    </aside>
  );
}

export { FilterBar };
