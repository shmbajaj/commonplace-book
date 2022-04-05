import { LabelList } from "../../LabelList/LabelList";
import styles from "./ActionBar.styles.module.css";
import { actionIcons } from "data";
import { useFeatureBar, useNotes } from "context";
import { useEffect } from "react";
import { useState } from "react";

function ActionBarIcons() {
  const {
    notesState,
    notesDispatch,
    getColor,
    replicaNote,
    setReplicaNote,
    deleteNote,
    archiveNote,
    updateNote,
    unarchiveNote,
    deleteArchiveNote,
    removeFromDeleted,
    addToDeleted,
  } = useNotes();

  const { state } = useFeatureBar();

  async function deleteActiveNote() {
    const type = state.activeFeature === "notes" ? "notes" : "archives";
    const noteToBeDeleted = { ...notesState.activeNote, ...replicaNote };
    await updateNote(noteToBeDeleted);
    if (type === "notes") {
      const notes = await deleteNote(noteToBeDeleted);
      notesDispatch({ type: "NOTES", payload: notes });
    } else if (type === "archives") {
      const { notes, archives } = await deleteArchiveNote(noteToBeDeleted);
      notesDispatch({ type: "NOTES", payload: archives });
    }

    if (state.activeFeature === "deleted") {
      const notes = removeFromDeleted(notesState.deleted, noteToBeDeleted);
      notesDispatch({ type: "UPDATE_DELETED", payload: notes });
    } else {
      const notes = addToDeleted(notesState.deleted, noteToBeDeleted);
      notesDispatch({ type: "UPDATE_DELETED", payload: notes });
    }
  }

  async function archiveActiveNote() {
    const noteToBeArchived = { ...notesState.activeNote, ...replicaNote };
    await updateNote(noteToBeArchived);
    const { notes, archives } = await archiveNote(noteToBeArchived);
    notesDispatch({ type: "NOTES", payload: notes });
  }

  async function unarchiveActiveNote() {
    const noteToBeUnArchived = { ...notesState.activeNote, ...replicaNote };
    const { notes, archives } = await unarchiveNote(noteToBeUnArchived);
    notesDispatch({ type: "NOTES", payload: archives });
  }

  async function saveNote() {
    const noteToBeSaved = { ...notesState.activeNote, ...replicaNote };
    const notes = await updateNote(noteToBeSaved);
    notesDispatch({ type: "NOTES", payload: notes });
  }

  async function handleLabelsEditor() {
    notesDispatch({ type: "TOGGLE_LABELS_EDITOR", payload: "grid" });
  }

  function onClickHandler(event) {
    const textContent = event.target?.textContent;
    if (textContent === "priority_high") {
      setReplicaNote((prev) => ({ ...prev, isPriorirty: !prev.isPriorirty }));
    }
    if (textContent === "palette") {
      const newBackgroundColor = getColor();
      setReplicaNote((prev) => ({
        ...prev,
        backgroundColor: newBackgroundColor,
      }));
    }
    if (textContent === "delete") {
      deleteActiveNote();
    }
    if (textContent === "archive" && state.activeFeature === "notes") {
      archiveActiveNote();
    }
    if (textContent === "unarchive" && state.activeFeature === "archives") {
      unarchiveActiveNote();
    }

    if (textContent === "save") {
      saveNote();
    }

    if (textContent === "label") {
      handleLabelsEditor();
    }
  }

  function getIconName(featureName, iconName) {
    if (featureName === "notes" && iconName === "archive") {
      return "archive";
    }

    if (featureName === "notes" && iconName !== "archive") {
      return iconName;
    }

    if (featureName === "archives" && iconName === "archive") {
      return "unarchive";
    }

    if (featureName === "archives" && iconName !== "archive") {
      return iconName;
    }
  }

  return actionIcons.map((icon, index) => (
    <span
      className={`material-icons-outlined ${styles["material_icons_extended"]}`}
      key={index}
      style={{
        color:
          replicaNote.isPriorirty && icon["iconName"] === "priority_high"
            ? "red"
            : "currentcolor",
      }}
      onClick={(e) => onClickHandler(e)}
    >
      {getIconName(state.activeFeature, icon["iconName"])}
    </span>
  ));
}

function ActionBar() {
  const {
    notesState: { activeNote },
    replicaNote,
  } = useNotes();
  const [actionItems, setActionItems] = useState({
    labels: [],
    createdOn: "",
    isPriority: false,
  });

  useEffect(() => {
    if (activeNote) {
      setActionItems((prev) => ({
        ...prev,
        labels: replicaNote.labels,
        createdOn: replicaNote.createdOn,
        isPriority: replicaNote.isPriority,
      }));
    }
  }, [activeNote]);

  return (
    <div className={styles["status_bar"]}>
      <LabelList list={actionItems.labels} active={false} />
      <div className={styles["action_bar"]}>
        <p className="mr-auto">{`${
          actionItems.createdOn ? `Created on ${actionItems.createdOn}` : ""
        }`}</p>
        {activeNote && <ActionBarIcons />}
      </div>
    </div>
  );
}

export { ActionBar };
