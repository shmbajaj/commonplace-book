import styles from "./LabelsEditor.styles.module.css";
import { useNotes, useFeatureBar } from "context";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export function LabelsEditorHeader() {
  return (
    <div className={styles["labelEditorHeader"]}>
      <h6 className={`card-title card-title-m-0 ${styles["headerLabelText"]}`}>
        Edit Labels
      </h6>
      <div></div>
      <CloseIcon />
    </div>
  );
}
export function GetLablels() {
  const { replicaNote } = useNotes();
  return (
    <div className={styles["labelBarWrapper"]}>
      {replicaNote.labels &&
        replicaNote.labels.map((item) => (
          <ShowLabel label={item} key={item._id} />
        ))}
    </div>
  );
}
function CloseIcon() {
  const {
    notesState,
    notesDispatch,
    updateNote,
    replicaNote,
    archiveNote,
    setReplicaNote,
  } = useNotes();
  const { state } = useFeatureBar();
  return (
    <span
      onClick={() =>
        onCloseClickHandler(
          notesState,
          notesDispatch,
          updateNote,
          replicaNote,
          archiveNote,
          setReplicaNote,
          state
        )
      }
      className={`material-icons-outlined ${styles["endIcon"]}`}
    >
      close
    </span>
  );
}
function LabelIcon() {
  return <span className={`material-icons ${styles["labelIcon"]}`}>label</span>;
}
function ShowLabel({ label }) {
  const { setReplicaNote } = useNotes();
  return (
    <div className={styles["labelBar"]}>
      <LabelIcon />
      <div className={styles["labelText"]}>{label.labelText}</div>
      <span
        onClick={() => removeLabel(setReplicaNote, label._id)}
        className={`material-icons-outlined ${styles["endIcon"]} `}
      >
        delete
      </span>
    </div>
  );
}
export function AddLabels() {
  const [label, setLabel] = useState({ labelText: "", _id: uuid() });
  const { setReplicaNote } = useNotes();

  function onClickHandler() {
    setReplicaNote((prev) => ({ ...prev, labels: [label, ...prev.labels] }));
    setLabel({ labelText: "", _id: uuid() });
  }

  function onChangeHandler(e) {
    const text = e.target.value;
    if (!isEmptyOrSpaces(text)) {
      setLabel((prev) => ({ ...prev, labelText: text }));
    }
  }

  return (
    <div className={styles["labelEditorInputArea"]}>
      <p></p>
      <input
        type="text"
        placeholder="Add a new label"
        className={styles["labelInputArea"]}
        value={label.labelText}
        onChange={(e) => onChangeHandler(e)}
      />
      <span
        className={`material-icons-outlined ${styles["doneIcon"]}`}
        onClick={() => onClickHandler()}
      >
        done
      </span>
    </div>
  );
}

async function onCloseClickHandler(
  notesState,
  notesDispatch,
  updateNote,
  replicaNote,
  state
) {
  notesDispatch({ type: "TOGGLE_LABELS_EDITOR", payload: "none" });
  //@Feature: It's saves note on label editor close action...
  const noteToBeUpdated = { ...notesState.activeNote, ...replicaNote };
  if (state.activeFeature === "notes") {
    const notes = await updateNote(noteToBeUpdated);
    notesDispatch({
      type: "NOTES",
      payload: notes,
      hardReset: noteToBeUpdated,
    });
  } 
}

async function removeLabel(setReplicaNote, _id) {
  setReplicaNote((prev) => ({
    ...prev,
    labels: [...prev.labels].filter((label) => label._id !== _id),
  }));
}

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}
