import { useFeatureBar } from "context";

export function NoNotesPresentMessage() {
  const {
    state: { activeFeature },
  } = useFeatureBar();
  return (
    <h1
      className="card-subtitle card-subtitle-m-0 clear-all-filters"
      style={getMessageStyle()}
    >
      {`${
        activeFeature !== "deleted"
          ? "Hey, write notes and compile your knowledge."
          : "Atleast do some work, no notes in trash."
      }`}
    </h1>
  );
}

function getMessageStyle() {
  return {
    textAlign: "center",
    height: "100px",
    color: "black",
    margin: "1rem",
    fontWeight: "bolder",
    border: "15px solid",
    paddingTop: "10px",
  };
}
