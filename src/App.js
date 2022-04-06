import "./styles/styles.variables.css";
import { ContextsProvider } from "./ContextsProvider";
import { Route, Routes } from "react-router-dom";
import { NoteTakingPage, NotFoundPage } from "./GetPages";

function App() {
  return (
    <ContextsProvider>
      <Routes>
        <Route path="/" element={<NoteTakingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ContextsProvider>
  );
}

export default App;
