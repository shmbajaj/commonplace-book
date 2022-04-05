import { RichTextEditor } from "../RichTextEditor/RichTextEditor";
import { ActionBar } from "./ActionBar/ActionBar";
import { LabelsEditor } from "../LabelsEditor/LabelsEditor";
import { Filters } from "components/FilterBar/Filters/Filters";
import styles from "./Main.styles.module.css";

function Main() {
  return (
    <main className={styles["main"]}>
      <RichTextEditor />
      <ActionBar />
      <LabelsEditor />
      {/* <Filters /> */}
    </main>
  );
}

export { Main };
