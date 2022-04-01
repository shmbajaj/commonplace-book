import styles from "./Label.styles.module.css";

function Label({ labelText }) {
  return (
    <p className={`${styles.label}`}>
      {labelText}
    </p>
  );
}

export { Label };
