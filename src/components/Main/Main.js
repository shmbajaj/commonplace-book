import { RichTextEditor } from "../RichTextEditor/RichTextEditor";
import { ActionBar } from "./ActionBar/ActionBar";
import styles from "./Main.styles.module.css";

function Main() {
  return (
    <main className={styles["main"]}>
      <RichTextEditor />
      <ActionBar />
    </main>
  );
}

export { Main };
