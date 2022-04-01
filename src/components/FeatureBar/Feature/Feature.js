import styles from "./Feature.styles.module.css";

function Feature({ iconText, iconName }) {
  return (
    <button
      className={`${styles.feature} ${
        iconText === "New Note" ? styles.feature_new_note : ""
      }`}
    >
      <div className={styles.cta}>
        <span
          className={`material-icons ${styles.icon} ${
            iconText === "New Note" ? styles.icon_new_note : ""
          }`}
        >
          {iconName}
        </span>
        <span className={`h4 ${styles.iconText}`}>{iconText}</span>
      </div>
    </button>
  );
}

export { Feature };
