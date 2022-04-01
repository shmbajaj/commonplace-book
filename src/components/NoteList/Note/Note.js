import styles from "./Note.styles.module.css";
import { LabelList } from "../../LabelList/LabelList";

function Note({ title, labelsList, active }) {
  return (
    <div className={`${styles.metaNote} ${active ? styles.active : ""}`}>
      <p className={styles.title}>{title}</p>
      <LabelList list={labelsList} active={active} />
    </div>
  );
}

export { Note };
