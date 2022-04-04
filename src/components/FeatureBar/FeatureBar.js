import { Feature } from "./Feature/Feature";
import styles from "./FeatureBar.styles.module.css";
import { NewNote } from "./NewNote/NewNote";
import { useFeatureBar } from "context";

function FeatureBar() {
  const { state } = useFeatureBar();
  const { features } = state;
  return (
    <aside className={styles.feature_bar_aside}>
      <ul
        className={`
        ${styles.feature_bar} `}
      >
        <NewNote />
        {features.map((feature) => (
          <Feature feature={feature} key={feature._id} />
        ))}
      </ul>
    </aside>
  );
}

export { FeatureBar };
