import { Link } from "react-router-dom";
import styles from "./Navbar.styles.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link
        to="/login"
        className={`h3 ${styles.navbar_link} ${styles.navbar_action} `}
      >
        Login
      </Link>
      <Link
        to="/logout"
        className={`h3 ${styles.navbar_link} ${styles.navbar_action}`}
      >
        Logout
      </Link>
      <Link
        to="/notes"
        className={`h3 ${styles.navbar_link} ${styles.navbar_action} ${styles.navbar_action_cta}`}
      >
        Start Taking Notes
      </Link>
    </nav>
  );
}

export { Navbar };
