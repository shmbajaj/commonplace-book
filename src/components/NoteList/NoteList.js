import styles from "./NoteList.styles.module.css";
import { Note } from "./Note/Note";

function NoteList({ list }) {
  return (
    <ul>
      {list.map(({ title, labelsList, active }, index) => (
        <Note
          title={title}
          active={active}
          labelsList={labelsList}
          key={index}
        />
      ))}
    </ul>
  );
}

export { NoteList };
