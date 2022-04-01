import { FilterBar, FeatureBar, Main } from "components";

function getStyle() {
  return {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "15% 60% 25%",
  };
}

function App() {
  return (
    <div style={getStyle()}>
      <FeatureBar />
      <div></div>
      <FilterBar />
    </div>
  );
}

export default App;
