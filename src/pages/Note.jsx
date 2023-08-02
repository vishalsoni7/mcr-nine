import { useContext, useState } from "react";
import { VideoContext } from "../component/VideosContext";
import "../css/note.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";

export const Note = ({ noteId }) => {
  const { notesList, setNotesList, setNoteModal, setEditNoteId } =
    useContext(VideoContext);

  const [notes, setNotes] = useState("");

  const handleAddNotes = () => {
    if (!notes) {
      alert("Please fill input.");
    } else if (notes !== "") {
      setNotesList([{ id: `${notes} - ${Date.now()}`, notes }, ...notesList]);
      setNotes("");
      setNoteModal(false);
      setEditNoteId(null);
    }
  };

  const handleEdit = () => {
    const editNote = notesList.find((n) => n.id === noteId);
    const updatedNote = notesList.map((n) =>
      n.id === editNote.id
        ? (n = { id: n.id, notes })
        : { id: n.id, notes: n.notes }
    );
    setNotesList(updatedNote);
    setNoteModal(false);
    setEditNoteId(null);
  };

  const findNote = notesList?.find((n) => n?.id === noteId);

  return (
    <div className="note-div">
      <span className="note-modal">
        {" "}
        <b>Add Note </b>{" "}
        <FontAwesomeIcon
          className="cancle"
          onClick={() => setNoteModal(false)}
          icon={faBan}
        />
      </span>
      <input
        type="text"
        defaultValue={noteId ? findNote?.notes : ""}
        placeholder=" Write your note here"
        onChange={(e) => setNotes(e.target.value)}
      />
      <button
        onClick={() => {
          noteId ? handleEdit() : handleAddNotes();
        }}
        className="note-btn"
      >
        {" "}
        {noteId ? "Update Note" : "Add Note"}
      </button>
    </div>
  );
};
