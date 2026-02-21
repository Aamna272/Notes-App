import React from "react";
import { Link } from "react-router-dom";

export default function NotesList({ notes }) {
  return (
    <div>
      <div className="max-w-175 flex w-full flex-col gap-2.5 mx-auto mt-5">
        {notes.map((note) => (
          <Link
            to={`/notes/${note.id}`} // ✅ correct route
            key={note.id}
            className="block"
          >
            <div className="flex cursor-pointer flex-col gap-2.5 bg-[#F7F7F7] p-2.5 rounded-lg hover:bg-[#eaeaea] transition">
              <h1 className="text-[18px] font-semibold">{note.title}</h1>
              <p className="text-[14px] text-gray-500">Click to view / edit</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
