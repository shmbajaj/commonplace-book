function reducerFunction(state, { type, payload }) {
  switch (type) {
    case "TOGGLE_FEATURES":
      return {
        ...state,
        activeFeature: payload,
      };
    default:
      return state;
  }
}

export { reducerFunction };
