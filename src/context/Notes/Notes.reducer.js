function reducerFunction(state, { type, payload, hardReset = null }) {
  switch (type) {
    case "NOTES":
      return {
        ...state,
        notes: payload,
        activeNote: hardReset ? hardReset : "",
      };
    case "ACTIVE_NOTE":
      return {
        ...state,
        activeNote: payload,
      };
    case "TOGGLE_PRIORITY":
      return {
        ...state,
        activeNote: {
          ...state.activeNote,
          isPriority: !state.activeNote.isPriority,
        },
      };
    case "TOGGLE_BACKGROUND_COLOR":
      return {
        ...state,
        activeNote: {
          ...state.activeNote,
          backgroundColor: getColor(),
        },
      };
    case "UPDATE_ACTIVE_NOTE":
      return {
        ...state,
        activeNote: {
          ...state.activeNote,
          [payload.key]: payload.value,
        },
      };
    case "UPDATE_DELETED":
      return {
        ...state,
        deleted: [payload],
      };
    case "TOGGLE_LABELS_EDITOR":
      return {
        ...state,
        labelsEditorDisplay: payload,
      };

    default:
      return state;
  }
}

function getColor() {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 70 * Math.random()) +
    "%," +
    (85 + 10 * Math.random()) +
    "%)"
  );
}

export { reducerFunction };
