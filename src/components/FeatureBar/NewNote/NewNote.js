import featureStyles from "../Feature/Feature.styles.module.css";
import { useFeatureBar, useNotes } from "context";

export function NewNote({ iconText = "New Note", iconName = "add_circle" }) {
  const {
    state: { activeFeature },
  } = useFeatureBar();

  const {
    notesState,
    notesDispatch,
    createNewNote,
    postNote,
    updateNote,
    replicaNote,
  } = useNotes();

  async function addNewNoteIndependtly() {
    const newNote = createNewNote();
    if (notesState.activeNote) {
      const prevActiveNote = { ...notesState.activeNote, ...replicaNote };
      await updateNote(prevActiveNote);
      const notes = await postNote(newNote);
      notesDispatch({ type: "NOTES", payload: notes });
    } else {
      const notes = await postNote(newNote);
      notesDispatch({ type: "NOTES", payload: notes });
    }
  }

  function onNewNoteClickHandler() {
    if (activeFeature === "notes") {
      addNewNoteIndependtly();
    } else {
      console.error("No Feature is out there");
    }
  }

  return (
    <button
      className={`${featureStyles.feature} ${featureStyles.feature_new_note}`}
      onClick={() => onNewNoteClickHandler()}
    >
      <div className={featureStyles.cta}>
        <span
          className={`material-icons ${featureStyles.icon} ${featureStyles.icon_new_note}`}
        >
          {iconName}
        </span>
        <span className={`h3 ${featureStyles.iconText}`}>{iconText}</span>
      </div>
    </button>
  );
}
