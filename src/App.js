import { FilterBar, FeatureBar, Main } from "components";

function getStyle(){
  return {
    display:"grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns:"15% 25% 60%",
  }
}

function App() {
  return (
    <div style={getStyle()}> 
      <FeatureBar />
      <FilterBar />
      <Main />
    </div>
  )
}

export default App;
