import { Hero } from "../Hero/Hero";
import { Navbar } from "./Navbar/Navbar";
import styles from "./Header.styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Hero />
      <Navbar />
    </header>
  );
}

export { Header };
