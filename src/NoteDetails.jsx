import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { NotesContext } from "./NotesContext";
export default function NoteDetails() {
  const { notes, updateNote, deleteNote } = useContext(NotesContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const note = notes.find((n) => n.id === Number(id));

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setBody(note.body);
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateNote(note.id, title, body);
    navigate("/");
  };

  const handleDelete = () => {
    deleteNote(note.id);
    navigate("/");
  };
  return (
    <div className="note-details">
      <div className=" bg-[#F7F7F7] w-full flex items-center min-h-17.5 p-2.5">
        <div className="max-w-175 flex w-full gap-5 mx-auto justify-between">
          <Link to="/">
            <p className="text-16px hover:text-[#437993] cursor-pointer">
              Home
            </p>
          </Link>
          <h1 className="text-18px"></h1>
        </div>
      </div>
      <div className="flex mx-auto flex-col max-w-175 w-full gap-4 mt-5 p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex mx-auto flex-col max-w-175 w-full gap-2.5  mt-5 p-4">
            <input
              required
              type="text"
              value={title}
              placeholder="Type your Notes title"
              className=" max-w-175 w-full p-2.5 bg-[#F7F7F7] text-[18px] rounded-[5px]"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              required
              placeholder="Type your Notes body"
              name=""
              id=""
              value={body}
              className=" max-w-175 w-full  max-h-250 h-full  p-2.5 bg-[#F7F7F7] text-[18px] rounded-[5px]"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <div className="flex justify-between">
              <button
                id="updateNoteBtn"
                className=" border rounded-lg hover:bg-black  p-2.5 bg-[#437993] text-white cursor-pointer"
              >
                Update Note
              </button>
              <button
                id="deleteNoteBtn"
                onClick={handleDelete}
                type="button"
                className=" border rounded-lg hover:bg-black  p-2.5 bg-[#437993] text-white cursor-pointer"
              >
                Delete Note
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
