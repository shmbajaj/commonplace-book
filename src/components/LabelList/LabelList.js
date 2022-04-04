import { Label } from "../Label/Label";
import styles from "./LabelList.styles.module.css";
import { useNotes } from "context";

function LabelList({ list, active }) {
  const {
    notesState: { activeNote },
  } = useNotes();
  return (
    <div className={styles.listWrapper}>
      {list && (
        <span
          className={`material-icons ${styles.listIcon} ${
            active ? styles.listIconActive : ""
          } `}
        >
          label
        </span>
      )}
      <ul className={styles.labelsList}>
        {list &&
          list.map((label, index) => <Label key={index} label={label} />)}
      </ul>
    </div>
  );
}

export { LabelList };
