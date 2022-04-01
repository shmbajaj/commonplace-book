import { LabelList } from "../../LabelList/LabelList";
import styles from "./ActionBar.styles.module.css";
import { actionIcons } from "data";

const alist = [
  {
    labelText: "label",
  },
  {
    labelText: "A label",
  },
  {
    labelText: "The Label",
  },
  {
    labelText: "Label",
  },
];
const date = "April 01 2022";

function ActionBarIcons() {
  return actionIcons.map((icon, index) => (
    <span
      className={`material-icons-outlined ${styles["material_icons_extended"]}`}
      key={index}
    >
      {icon["iconName"]}
    </span>
  ));
}

function ActionBar() {
  return (
    <div className={styles["status_bar"]}>
      <LabelList list={alist} active={false} />
      <div className={styles["action_bar"]}>
        <p className="mr-auto">{`Created on ${date}`}</p>
        <ActionBarIcons />
      </div>
    </div>
  );
}

export { ActionBar };
