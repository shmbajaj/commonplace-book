import { Header, Footer, FeatureBar, FilterBar, Main } from "components";
import { Link } from "react-router-dom";
import styles from "components/Header/Navbar/Navbar.styles.module.css";

function getStyle() {
  return {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridtTemplateRows: "1fr 1fr 1fr",
    gridTemplateAreas: " 'header' 'main' 'footer' "
  };
}
function getNotFoundMessageStyle() {
  return {
    display: "flex",
    flexDirection: "column",
    padding: "calc(var(--size-9) * 4)",
    rowGap: "var(--size-9)",
    alignItems: "center",
    textAlign: "center",
    margin: "auto 10vw"
  };
}
export function NoteTakingPage() {
  return (
    <div style={getStyle()}>
      <Header style={{ gridArea: "header" }} />
      <div
        style={{
          gridArea: "main",
          display: "grid",
          gridTemplateColumns: "20%  25% 55%"
        }}
      >
        <FeatureBar />
        <FilterBar />
        <Main />
      </div>
      <Footer style={{ gridArea: "footer" }} />
    </div>
  );
}
function NotFounMessage() {
  return (
    <div style={getNotFoundMessageStyle()}>
      <h1>404 Page Not Found</h1>
      <h2>Hey you got distracted and came to aliens lane, area 51.</h2>
      <h2>Switch back to peace zone, by click on below.</h2>
      <>
        <Link
          to="/"
          className={`h3 ${styles.navbar_link} ${styles.navbar_action} ${styles.navbar_action_cta}`}
          style={{ width: "max-content" }}
        >
          Bring Me Back
        </Link>{" "}
      </>
    </div>
  );
}
export function NotFoundPage() {
  return (
    <div style={getStyle()}>
      <Header style={{ gridArea: "header" }} />
      <div
        style={{
          gridArea: "main",
          display: "grid",
          gridTemplateColumns: "20%  60% 20%",
          minHeight: "70vh"
        }}
      >
        <div></div>
        <NotFounMessage />
        <div></div>
      </div>
      <Footer style={{ gridArea: "footer" }} />
    </div>
  );
}
