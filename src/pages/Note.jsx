import { useContext } from "react";
import { VideoContext } from "../component/VideosContext";
import "../css/note.css";

export const Note = () => {
  const { notesList, setNotes, addNotes, setNoteModal } =
    useContext(VideoContext);
  return (
    <div className="note-div">
      <span>
        {" "}
        <b>Add Note </b>{" "}
      </span>
      <input
        onChange={(e) => setNotes(e.target.value)}
        type="text"
        placeholder=" Write your note here "
      />
      <button
        onClick={() => {
          addNotes();
          setNoteModal(false);
        }}
        className="note-btn"
      >
        {" "}
        Add Notes{" "}
      </button>
    </div>
  );
};
