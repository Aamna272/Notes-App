import React, { useState, useEffect } from "react";
import {
  createNote,
  loadNotesFromStorage,
  saveNotesToStorage,
} from "./noteHelpers";
import { NotesContext } from "./NotesContext.js";

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(loadNotesFromStorage);

  useEffect(() => {
    saveNotesToStorage(notes);
  }, [notes]);

  const addNote = (title, body) => {
    setNotes((prev) => [...prev, createNote(title, body)]);
  };
  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };
  const updateNote = (id, title, body) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, title, body, updatedAt: new Date().toISOString() }
          : note,
      ),
    );
  };
  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {children}
    </NotesContext.Provider>
  );
};
