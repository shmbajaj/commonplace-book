import { Note } from "./Note/Note";

function NoteList({ list }) {
  return (
    <ul>
      {list.map((note, index) => (
        <Note
          note = {note}
          key={index}
        />
      ))}
    </ul>
  );
}

export { NoteList };
