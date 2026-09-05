import React, { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !details.trim()) {
      return;
    }
    const copyNotes = [...notes];
    copyNotes.push({ title, details });
    setNotes(copyNotes);
    setTitle("");
    setDetails("");
  };
  const deleteNote = (idx) => {
    const copyNotes = [...notes];
    copyNotes.splice(idx, 1);
    setNotes(copyNotes);
  };
  return (
    <div className="h-screen bg-gray-900 text-white w-full flex gap-6">
      <form
        className="w-1/2 p-8 flex flex-col gap-6"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="bg-gray-800 py-2 px-4 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter note title here"
        />
        <textarea
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          className="flex-1 bg-gray-800 px-4 py-3 bg-gray-800 text-white py-2 px-4 placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Details ..."
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded"
        >
          Submit
        </button>
      </form>
      <div className="h-screen p-6 flex flex-col bg-gray-800 w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Recent Notes</h2>
        <div className="grid grid-cols-2 gap-4 overflow-y-autoflex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
          {notes.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="w-48 h-56 bg-white p-4 text-gray-800 rounded-2xl flex flex-col"
              >
                <h3 className="w-full  text-center text-lg font-semibold pb-2 mb-2 border-b border-amber-800">
                  {elem.title}
                </h3>
                <p className="break-words overflow-hidden">{elem.details}</p>
                <button
                  onClick={(e) => {
                    deleteNote(idx);
                  }}
                  className="mt-auto w-full bg-red-500 hover:bg-red-600 text-white py-1 text-sm rounded"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
