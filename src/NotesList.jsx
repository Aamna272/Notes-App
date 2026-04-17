import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { getProcessedNotes } from "./noteHelpers";

export default function NotesList({ notes }) {
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  const processedNotes = useMemo(
    () => getProcessedNotes(notes, search, sortType),
    [notes, search, sortType],
  );

  return (
    <div>
      <div className="bg-[#F7F7F7] w-full flex items-center min-h-17.5 p-2.5">
        <div className="flex w-full  justify-center  gap-x-12.5  mx-auto">
          <input
            type="text"
            className="w-50 rounded-lg bg-white  px-2 py-2"
            placeholder="Filter By"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <select
            name="sortBy"
            id="sortBy"
            className="bg-white w-50 rounded-lg px-2 py-2"
            onChange={(e) => {
              setSortType(e.target.value);
            }}
          >
            <option value="">Sort By</option>
            <option value="alphabet">Alphabet</option>
            <option value="edited">Last Edited</option>
            <option value="created">Recently Created</option>
          </select>
        </div>
      </div>
      <div className="max-w-175 flex w-full flex-col gap-2.5 mx-auto mt-5">
        {processedNotes.map((note) => (
          <Link to={`/notes/${note.id}`} key={note.id} className="block">
            <div className="flex cursor-pointer flex-col gap-2.5 bg-[#F7F7F7] p-2.5 rounded-lg hover:bg-[#eaeaea] transition">
              <h1 className="text-[18px] font-semibold">{note.title}</h1>
              <p className="text-[14px] text-gray-500">
                Last Edited : {note.updatedAt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
