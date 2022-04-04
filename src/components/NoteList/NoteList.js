import { Note } from "./Note/Note";

function NoteList({ list }) {
  return (
    <ul>
      {list?.length !== 0 &&
        list.map((note) => <Note note={note} key={note._id} />)}
    </ul>
  );
}

export { NoteList };
