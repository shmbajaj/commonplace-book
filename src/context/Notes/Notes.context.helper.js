import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMzczMTdjZi04MTQxLTQ3N2UtODI0Ni0yMDYzYzM5ZjlmNDAiLCJlbWFpbCI6InNodWJoYW1iYWphakBzYXR5YS5jb20ifQ.dKdp_ctHqPReopna3yaEc4aoLl-NOSexEEw-AarjYW4";

const headers = {
  authorization: token,
};

function createNewNote() {
  const note = {
    text: "",
    title: "New Note",
    labels: [],
    backgroundColor: "var(--color-ebebeb)",
    isPriorirty: false,
    createdOn: new Date().toLocaleString(),
    isArchived: false,
  };
  return note;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getColor() {
  const h = randomInt(0, 360);
  const s = randomInt(42, 98);
  const l = randomInt(40, 90);
  return `hsl(${h},${s}%,${l}%)`;
}

async function getNotesRouteNotes() {
  try {
    const url = "/api/notes";
    const response = await axios.get(url, { headers });
    const notes = response.data?.notes;
    return notes;
  } catch (exception) {
    console.error(exception);
  }
}

async function getArchiveRouteNotes() {
  try {
    const url = "/api/archives";
    const response = await axios.get(url, { headers });
    const archives = response.data?.archives;
    return archives;
  } catch (exception) {
    console.error(exception);
  }
}

async function postNote(note) {
  try {
    const url = "/api/notes/";
    const response = await axios.post(url, { note }, { headers });
    const notes = response.data?.notes;
    return notes;
  } catch (exception) {
    console.error(exception);
  }
}

async function updateNote(note) {
  try {
    const _id = note._id;
    const url = `/api/notes/${_id}`;
    const response = await axios.post(url, { note }, { headers });
    const notes = response.data?.notes;
    return notes;
  } catch (exception) {
    console.error(exception);
  }
}

async function deleteNote(note) {
  try {
    const _id = note._id;
    const url = `/api/notes/${_id}`;
    const response = await axios.delete(url, { headers });
    const notes = response.data?.notes;
    return notes;
  } catch (exception) {
    console.error(exception);
  }
}

async function archiveNote(note) {
  try {
    const _id = note._id;
    const url = `/api/notes/archives/${_id}`;
    const response = await axios.post(url, { note }, { headers });
    const notes = response.data?.notes;
    const archives = response.data?.archives;
    return { notes, archives };
  } catch (exception) {
    console.error(exception);
  }
}

async function unarchiveNote(note) {
  try {
    const _id = note._id;
    const url = `/api/archives/restore/${_id}`;
    const response = await axios.post(url, {}, { headers });
    const notes = response.data?.notes;
    const archives = response.data?.archives;
    return { notes, archives };
  } catch (exception) {
    console.error(exception);
  }
}

async function deleteArchiveNote(note) {
  try {
    const _id = note._id;
    const url = `/api/archives/delete/${_id}`;
    const response = await axios.delete(url, { headers });
    const notes = null;
    const archives = response.data?.archives;
    return { notes, archives };
  } catch (exception) {
    console.error(exception);
  }
}

function removeFromDeleted(deleted, tobeDeleted) {
  const prevDeletedNotes = [...deleted];
  return [...prevDeletedNotes].filter((note) => note._id !== tobeDeleted._id);
}

function addToDeleted(deleted, tobeAdded) {
  const prevDeletedNotes = [...deleted];
  return [...prevDeletedNotes, tobeAdded];
}

export {
  createNewNote,
  getColor,
  getNotesRouteNotes,
  getArchiveRouteNotes,
  postNote,
  updateNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
  deleteArchiveNote,
  removeFromDeleted,
  addToDeleted,
};
