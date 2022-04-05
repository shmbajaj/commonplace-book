import styles from "./LabelsEditor.styles.module.css";
import { useNotes } from "context";
import {
  LabelsEditorHeader,
  AddLabels,
  GetLablels,
} from "./LabelsEditor.components.";

function LabelsEditor() {
  const { notesState } = useNotes();
  const { labelsEditorDisplay } = notesState;
  return (
    <div
      className={styles["labelEditorContainer"]}
      style={{ display: labelsEditorDisplay }}
    >
      <LabelsEditorHeader />
      <AddLabels />
      <GetLablels />
    </div>
  );
}

export { LabelsEditor };
