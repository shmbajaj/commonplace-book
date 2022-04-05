function inPriorirtyNotes(notes, inPriorirty) {
  if (!inPriorirty) return notes;
  return [...notes].filter((note) => note.isPriorirty);
}

function sortByCreatedOn(notes, sortBy) {
  if (sortBy === "Newest to Oldest") {
    return [...notes].sort(
      (a, b) => new Date(b.createdOn) - new Date(a.createdOn)
    );
  } else if (sortBy === "Oldest to Newest") {
    return [...notes].sort(
      (a, b) => new Date(a.createdOn) - new Date(b.createdOn)
    );
  }
  return notes;
}

export { inPriorirtyNotes, sortByCreatedOn };
