import {
  Header,
  Footer,
  FeatureBar,
  FilterBar,
  Main,
} from "components";
import "./styles/styles.variables.css";
import { FeatureBarProvider, FilterBarProvider, NotesProvider } from "context";

function getStyle() {
  return {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridtTemplateRows: "1fr 1fr 1fr",
    gridTemplateAreas: " 'header' 'main' 'footer' ",
  };
}

function NoteTakingPage() {
  return (
    <FeatureBarProvider>
      <NotesProvider>
        <FilterBarProvider>
          <div style={getStyle()}>
            <Header style={{ gridArea: "header" }} />
            <div
              style={{
                gridArea: "main",
                display: "grid",
                gridTemplateColumns: "20%  25% 55%",
              }}
            >
              <FeatureBar />
              <FilterBar />
              <Main />
            </div>
            <Footer style={{ gridArea: "footer" }} />
          </div>
        </FilterBarProvider>
      </NotesProvider>
    </FeatureBarProvider>
  );
}

function App() {
  return <NoteTakingPage />;
}

export default App;
