import { logoPath, appName } from "data";
import { Link } from "react-router-dom";
import styles from "./Hero.styles.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <Link to="/" className={styles.hero_link}>
        <img src={logoPath} className={styles.hero_image} />
        <span className="h3 ml-6">{appName}</span>
      </Link>
    </div>
  );
}

export { Hero };
