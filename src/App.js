import { Header, Footer, FeatureBar, FilterBar, Main } from "components";
import "./styles/styles.variables.css";

function getStyle() {
  return {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridtTemplateRows: "1fr 1fr 1fr",
    gridTemplateAreas:
      " 'header' 'main' 'footer' ",
  };
}

console.log(getStyle());

function App() {
  return (
    <div style={getStyle()}>
      <Header style={{ gridArea: "header" }} />
        <div style={{ gridArea: "main", display: "grid", gridTemplateColumns: "20%  25% 55%" }}>
        <FeatureBar />
      <FilterBar />
      <Main />
        </div>
      <Footer style={{ gridArea: "footer" }} />
    </div>
  );
}

export default App;
