import { Label } from "../Label/Label";
import styles from "./LabelList.styles.module.css";

function LabelList({ list, active }) {
  return (
    <div className={styles.listWrapper}>
      <span className={`material-icons ${styles.listIcon} ${active? styles.listIconActive : ""} `}>
        label
      </span>
      <ul className={styles.labelsList}>
        {list.map(({ labelText }, index) => (
          <Label key={index} labelText={labelText}/>
        ))}
      </ul>
    </div>
  );
}

export { LabelList };
