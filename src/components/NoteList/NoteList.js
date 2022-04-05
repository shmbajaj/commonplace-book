import { Note } from "./Note/Note";

function getMessageStyle() {
  return {
    textAlign: "center",
    height: "100px",
    color: "black",
    margin: "1rem",
    fontWeight: "bolder",
    border: "15px solid",
    paddingTop: "10px",
  };
}

function NoNotesPresentMessage() {
  return (
    <h1
      className="card-subtitle card-subtitle-m-0 clear-all-filters"
      style={getMessageStyle()}
    >
      Hey, write notes and compile your knowledge.
    </h1>
  );
}

function NoteList({ list }) {
  return (
    <>
      <ul>
        {list?.length !== 0 &&
          list.map((note) => <Note note={note} key={note._id} />)}
      </ul>
      {/* {list.length === 0 && <NoNotesPresentMessage />} */}
    </>
  );
}

export { NoteList };
