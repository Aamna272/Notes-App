export const LOCAL_STORAGE_KEY = "notes";

export const loadNotesFromStorage = () => {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
};

export const saveNotesToStorage = (notes) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
};

export const createNote = (title, body) => {
  const now = new Date().toISOString();
  return {
    id: Date.now(),
    title,
    body,
    createdAt: now,
    updatedAt: now,
  };
};

export const findNoteById = (notes, id) => {
  return notes.find((note) => note.id === Number(id));
};

export const getProcessedNotes = (notes, search, sortType) => {
  const lowerSearch = search.trim().toLowerCase();

  const filteredNotes = lowerSearch
    ? notes.filter((note) => note.title.toLowerCase().includes(lowerSearch))
    : notes;

  return filteredNotes.slice().sort((a, b) => {
    if (sortType === "alphabet") {
      return a.title.localeCompare(b.title);
    }
    if (sortType === "edited") {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    }
    if (sortType === "created") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    return 0;
  });
};
