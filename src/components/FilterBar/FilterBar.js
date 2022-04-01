import { SearchBar } from "../SearchBar/SearchBar";
import { NoteList } from "../NoteList/NoteList";
import styles from "./FilterBar.styles.module.css";

const alist = [
  {
    labelText: "label",
  },
  {
    labelText: "A label",
  },
  {
    labelText: "The Label",
  },
  {
    labelText: "Label",
  },
];

const list = [
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: false,
  },
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: false,
  },
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: true,
  },
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: false,
  },
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: false,
  },
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: true,
  },
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: false,
  },
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: false,
  },
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: false,
  },
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: false,
  },
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: false,
  },
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: true,
  },
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: false,
  },
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: false,
  },
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: true,
  },
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: false,
  },
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: false,
  },
  {
    title: "Welcome to notes",
    labelsList: alist,
    active: false,
  },
];

function FilterBar() {
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
      <NoteList list={list} />
    </aside>
  );
}

export { FilterBar };
