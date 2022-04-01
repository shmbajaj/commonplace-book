import { Feature } from "./Feature/Feature";
import { icons } from "data";
import styles from "./FeatureBar.styles.module.css";

function FeatureBar() {
  return (
    <aside className={styles.feature_bar_aside}>
      <ul
        className={`
        ${styles.feature_bar} `}
      >
        {icons.map(({ iconText, iconName }, index) => (
          <Feature iconText={iconText} iconName={iconName} key={index} />
        ))}
      </ul>
    </aside>
  );
}

export { FeatureBar };
