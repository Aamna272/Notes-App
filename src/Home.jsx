import React from "react";
import ResultsHeader from "./ResultsHeader";
import NotesList from "./NotesList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
export default function Home() {
  const {
    data: notes,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/notes");

  return (
    <div className="home">
      <ResultsHeader />
      {error && <div className="flex justify-center items-center">{error}</div>}
      {isLoading && (
        <div className="flex justify-center items-center">Loading...</div>
      )}
      {notes && <NotesList notes={notes} />}
      <div className="fixed bottom-0 right-0 m-5">
        <Link to="/add">
          <button className="hover:bg-black text-white bg-[#437993] rounded-lg text-[18px] p-5  cursor-pointer">
            Create New Note
          </button>
        </Link>
      </div>
    </div>
  );
}
