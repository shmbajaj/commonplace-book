import styles from "./Label.styles.module.css";

function Label({label}) {
  const { labelText }= label;
  return (
    <p className={`${styles.label}`}>
      {labelText}
    </p>
  );
}

export { Label };
