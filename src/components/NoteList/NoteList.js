import { Note } from "./Note/Note";
import { useNotes } from "context";
import { NoNotesPresentMessage } from "./NoNotesPresentMessage";

function NoteList({ list }) {
  const {
    notesState: { activeNote },
  } = useNotes();
  return (
    <>
      <ul>
        {list?.length !== 0 &&
          list.map((note) => <Note note={note} key={note._id} />)}
      </ul>
      {list.length === 0 && !activeNote && <NoNotesPresentMessage />}
    </>
  );
}

export { NoteList };
