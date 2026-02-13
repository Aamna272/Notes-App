import React from "react";

export default function Navbar() {
  return (
    <nav className="">
      <div className="bg-[#437993] p-4 flex justify-center w-full">
        <div className="max-w-300 w-full flex flex-col ">
          <h1 className="font-bold max-w-99 w-full text-white text-[2.25rem] leading-10">
            Notes App
          </h1>
          <p className="font-light max-w-99 w-full text-white">
            Take Notes and never forget
          </p>
        </div>
      </div>
    </nav>
  );
}
