import React, { useEffect, useState } from "react";
import NotesList from "./NotesList";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NotesContext } from "./NotesContext";
export default function Home() {
  const { notes } = useContext(NotesContext);
  return (
    <div className="home">
      {notes.length === 0 && (
        <div className="flex justify-center items-center">
          No notes yet. Add one!
        </div>
      )}

      {notes.length > 0 && <NotesList notes={notes} />}

      <div className="fixed bottom-0 right-0 m-5">
        <Link to="/add">
          <button className="hover:bg-black text-white bg-[#437993] rounded-lg text-[18px] p-5 cursor-pointer">
            Create New Note
          </button>
        </Link>
      </div>
    </div>
  );
}
