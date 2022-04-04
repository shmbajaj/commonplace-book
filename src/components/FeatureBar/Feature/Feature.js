import { useFeatureBar } from "context";
import styles from "./Feature.styles.module.css";

function Feature({ feature }) {
  const { featureIconText, featureName } = feature;
  const { state, dispatch } = useFeatureBar();

  function onClickHandler(featureName) {
    dispatch({ type: "TOGGLE_FEATURES", payload: featureName });
  }

  return (
    <button
      className={`${styles.feature} ${
        state.activeFeature === featureName ? styles.feature_is_selected : ""
      }`}
      onClick={() => onClickHandler(featureName)}
    >
      <div className={styles.cta}>
        <span
          className={`material-icons ${styles.icon} ${
            state.activeFeature === featureName
              ? styles.feature_icon_is_selected
              : ""
          }`}
        >
          {featureName}
        </span>
        <span className={`h3 ${styles.iconText}`}>{featureIconText}</span>
      </div>
    </button>
  );
}

export { Feature };
