import { createContext, useContext, useReducer, useState } from "react";
import { useEffect } from "react";
import { reducerFunction } from "./Notes.reducer";
import {
  createNewNote,
  getColor,
  getNotesRouteNotes,
  getArchiveRouteNotes,
  postNote,
  updateNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
  deleteArchiveNote,
  removeFromDeleted,
  addToDeleted,
} from "./Notes.context.helper";
import { useFeatureBar } from "context/FeatureBar/FeatureBar.context";

const NotesContext = createContext(null);

function NotesProvider({ children }) {
  const { state } = useFeatureBar();
  const [notesState, notesDispatch] = useReducer(reducerFunction, {
    notes: [],
    deleted: [],
    activeNote: "",
  });
  const [replicaNote, setReplicaNote] = useState({});

  useEffect(async () => {
    if (state.activeFeature === "notes") {
      if (notesState.activeNote) {
        const prevActiveNote = { ...notesState.activeNote, ...replicaNote };
        await archiveNote(prevActiveNote);
      }
      const notes = await getNotesRouteNotes();
      notesDispatch({ type: "NOTES", payload: notes });
    } else if (state.activeFeature === "archives") {
      if (notesState.activeNote) {
        const prevActiveNote = { ...notesState.activeNote, ...replicaNote };
        await updateNote(prevActiveNote);
      }
      const archives = await getArchiveRouteNotes();
      notesDispatch({ type: "NOTES", payload: archives });
    } else if (state.activeFeature === "deleted") {
      notesDispatch({ type: "NOTES", payload: notesState.deleted });
    }
  }, [state.activeFeature]);

  return (
    <NotesContext.Provider
      value={{
        notesState,
        notesDispatch,
        replicaNote,
        setReplicaNote,
        createNewNote,
        getColor,
        getNotesRouteNotes,
        getArchiveRouteNotes,
        postNote,
        updateNote,
        deleteNote,
        archiveNote,
        unarchiveNote,
        deleteArchiveNote,
        removeFromDeleted,
        addToDeleted,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

function useNotes() {
  return useContext(NotesContext);
}

export { NotesProvider, useNotes };
