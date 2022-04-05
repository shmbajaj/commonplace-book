import { createContext, useContext, useReducer } from "react";
import { reducerFunction } from "./FilterBar.reducer";
import { inPriorirtyNotes, sortByCreatedOn } from "./FilterBar.context.helper";

const FilterBarContext = createContext(null);

function FilterBarProvider({ children }) {
  const [filterState, dispatch] = useReducer(reducerFunction, {
    filterViewDisplay: "none",
    inPriorirty: false,
    sortBy: "",
  });

  return (
    <FilterBarContext.Provider
      value={{ filterState, dispatch, inPriorirtyNotes, sortByCreatedOn }}
    >
      {children}
    </FilterBarContext.Provider>
  );
}

function useFilterBar() {
  return useContext(FilterBarContext);
}

export { FilterBarProvider, useFilterBar };
