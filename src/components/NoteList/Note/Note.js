import styles from "./Note.styles.module.css";
import { LabelList } from "../../LabelList/LabelList";
import { useNotes, useFeatureBar } from "context";
import { useState } from "react";
import { useEffect } from "react";

function Note({ note }) {
  const { notesState, notesDispatch, updateNote, replicaNote, archiveNote,setReplicaNote } =
    useNotes();
  const { state } = useFeatureBar();

  async function updateNotesIndependtly(note) {
    const type = state.activeFeature === "notes" ? "notes" : "archives";
    const noteToBeUpdated = { ...notesState.activeNote, ...replicaNote };

    if (type === "notes") {
      const  notes  = await updateNote(noteToBeUpdated);
       notesDispatch({
        type: "NOTES",
        payload: notes,
      });
    } else {
      const { notes, archives } = await archiveNote(noteToBeUpdated);
       notesDispatch({
        type: "NOTES",
        payload: archives,
      });
    }

    setReplicaNote((prev) => ({ ...prev, ...note }));
    notesDispatch({ type: "ACTIVE_NOTE", payload: note });
  }

  function onNoteClickHandler(note) {
    if (notesState.activeNote) {
      updateNotesIndependtly(note);
    }
    setReplicaNote((prev) => ({ ...prev, ...note }));
    notesDispatch({ type: "ACTIVE_NOTE", payload: note });
  }

  return (
    <div
      className={`${styles.metaNote} ${
        note._id === notesState.activeNote._id ? styles.active : ""
      }`}
      onClick={() => onNoteClickHandler(note)}
    >
      <p className={styles.title}>{note.title}</p>
      <LabelList
        list={note.labels}
        active={note._id === notesState.activeNote._id}
      />
    </div>
  );
}

export { Note };
