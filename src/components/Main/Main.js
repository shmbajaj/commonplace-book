import { RichTextEditor } from "../RichTextEditor/RichTextEditor";
import { ActionBar } from "./ActionBar/ActionBar";
import { LabelsEditor } from "../LabelsEditor/LabelsEditor";
import styles from "./Main.styles.module.css";

function Main() {
  return (
    <main className={styles["main"]}>
      <RichTextEditor />
      <ActionBar />
      <LabelsEditor />
    </main>
  );
}

export { Main };
