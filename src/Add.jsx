import React, { use } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { NotesContext } from "./NotesContext";

export default function Add() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const { addNote } = useContext(NotesContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(title, body);
    navigate("/");
  };
  return (
    <div className="add">
      <div className=" bg-[#F7F7F7] flex  min-h-17.5 p-2.5">
        <div className="max-w-175  w-full items-center flex mx-auto">
          <Link to="/">
            <p className="text-16px hover:text-[#437993] cursor-pointer">
              Home
            </p>
          </Link>
        </div>
      </div>
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
          <div>
            <button
              id="addNoteBtn"
              className=" border rounded-lg hover:bg-black  p-2.5 bg-[#437993] text-white cursor-pointer"
            >
              Add Note
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
