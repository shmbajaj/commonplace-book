import { FeatureBarProvider, FilterBarProvider, NotesProvider } from "context";

function ContextsProvider({ children }) {
  return (
    <FeatureBarProvider>
      <NotesProvider>
        <FilterBarProvider>{children}</FilterBarProvider>
      </NotesProvider>
    </FeatureBarProvider>
  );
}

export { ContextsProvider };
