import { createContext, useContext, useReducer } from "react";
import { defaultFeaturesState as features } from "./FeatureBar.context.helper";
import { reducerFunction } from "./FeatureBar.reducer";

const FeatureBarContext = createContext(null);

function FeatureBarProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunction, {
    features,
  });

  return (
    <FeatureBarContext.Provider value={{ state, dispatch }}>
      {children}
    </FeatureBarContext.Provider>
  );
}

function useFeatureBar() {
  return useContext(FeatureBarContext);
}

export { FeatureBarProvider, useFeatureBar };
