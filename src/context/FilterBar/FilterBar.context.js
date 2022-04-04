import { createContext, useContext, useReducer } from "react";
import { reducerFunction } from "./FilterBar.reducer";

const FilterBarContext = createContext(null);

function FilterBarProvider({ children }) {
  const [filterState, dispatch] = useReducer(reducerFunction, {});

  return (
    <FilterBarContext.Provider value={{ filterState, dispatch }}>
      {children}
    </FilterBarContext.Provider>
  );
}

function useFilterBar() {
  return useContext(FilterBarContext);
}

export { FilterBarProvider, useFilterBar };
