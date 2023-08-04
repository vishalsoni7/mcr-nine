import { useContext, useState } from "react";
import { VideoContext } from "../component/VideosContext";

import "../css/note.css";
import { noteUpdate, fillInput } from "../data/toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";

export const Note = ({ noteId }) => {
  const { notesList, setNotesList, setNoteModal, setEditNoteId } =
    useContext(VideoContext);

  const [notes, setNotes] = useState("");

  const handleAddNotes = () => {
    if (!notes) {
      fillInput();
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
      n.id === editNote.id ? { id: n.id, notes: notes || n.notes } : n
    );
    setNotesList(updatedNote);
    noteUpdate();
    setNoteModal(false);
    setEditNoteId(null);
  };

  const findNote = notesList?.find((n) => n?.id === noteId);

  return (
    <div className="note-div">
      <span className="note-modal">
        <b>Add Note </b>
        <FontAwesomeIcon
          className="cancle"
          onClick={() => setNoteModal(false)}
          icon={faBan}
        />
      </span>
      <input
        type="text"
        defaultValue={noteId ? findNote?.notes : notes}
        placeholder=" Write your note here"
        onChange={(e) => setNotes(e.target.value)}
      />
      <button
        onClick={() => {
          noteId ? handleEdit() : handleAddNotes();
        }}
        className="note-btn"
      >
        {noteId ? "Update Note" : "Add Note"}
      </button>
    </div>
  );
};
