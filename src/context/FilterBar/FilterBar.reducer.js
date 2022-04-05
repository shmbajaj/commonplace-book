function reducerFunction(state, { type, payload }) {
  switch (type) {
    case "TOGGLE_FILTER_VIEW":
      return {
        ...state,
        filterViewDisplay: payload,
      };
    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        inPriorirty: false,
        sortBy: "",
      };
    case "IN_PRIORIRTY":
      return {
        ...state,
        inPriorirty: !state.inPriorirty,
      };
    case "SORT_BY":
      return {
        ...state,
        sortBy: payload,
      };
    default:
      return state;
  }
}

export { reducerFunction };
