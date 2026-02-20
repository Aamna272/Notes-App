import React from "react";

export default function NotesList({ notes }) {
  return (
    <div>
      <div className=" max-w-175 flex w-full flex-col gap-2.5 mx-auto mt-5">
        {notes.map((note) => (
          <div
            className=" flex cursor-pointer flex-col gap-2.5  bg-[#F7F7F7] p-2.5 max-"
            key={note.id}
          >
            <h1>{note.title}</h1>
            <h1>Last edited :{notes.id}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
