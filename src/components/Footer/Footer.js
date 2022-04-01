import { Hero } from "../Hero/Hero";
import styles from "./Footer.styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_app_info}>
        <Hero />
        <p>
          Commonplace book is a way to compile knowledge, by writing information
          or notes into digital book.
        </p>
        <p>
          It aims to compile decenteralized infromation into a centeralized
          digital book..
        </p>
      </div>
      <div className={styles.footer_author_info}>
        <span className="h3">Written ✍🏻 by</span>
        <span className="h3">Shubham Bajaj</span>
      </div>
    </footer>
  );
}

export { Footer };
