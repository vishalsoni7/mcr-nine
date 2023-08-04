import { useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { VideoContext } from "../component/VideosContext";
import { SideBar } from "./SideBar";
import { videos } from "../data/video";
import { Note } from "./Note";
import { PlayListModal } from "./PlayListModal";

import { noteDeleted } from "../data/toast";
import "../css/singlevideo.css";
import "../css/note.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBars,
  faListCheck,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export const SingleVideo = () => {
  const {
    noteModal,
    setNoteModal,
    notesList,
    inWatchList,
    removeFromWatchLater,
    handleWatchLater,
    playListModal,
    setPlayListModal,
    editNoteId,
    setEditNoteId,
    setNotesList,
  } = useContext(VideoContext);
  const { videoId } = useParams();

  const deleteNote = (noteId) => {
    const filterNotes = notesList.filter((n) => n.id !== noteId);
    setNotesList([...filterNotes]);
    noteDeleted();
  };

  const findVideo = videos.find(({ _id }) => +_id === +videoId);

  return (
    <div className="div">
      <SideBar />

      <div className="i-frame-div">
        <iframe className="i-frame" src={findVideo?.src}></iframe>
        <div className="single-video-title">
          <div className="aa">
            <h3>
              <b> {findVideo?.title} </b>
            </h3>
            <span>
              {findVideo?.views} Views | by {findVideo?.creator}
            </span>
          </div>
          <div className="single-video-icon">
            <FontAwesomeIcon
              onClick={() => {
                inWatchList(findVideo?._id)
                  ? removeFromWatchLater(findVideo?._id)
                  : handleWatchLater(findVideo);
              }}
              icon={faClock}
              className="icon"
            />
            <FontAwesomeIcon
              onClick={() => setPlayListModal(true)}
              icon={faBars}
              className="icon"
            />
            <FontAwesomeIcon
              onClick={() => {
                setNoteModal(true);
              }}
              icon={faListCheck}
              className="icon"
            />
          </div>
        </div>
        <div>
          <h3> My Notes </h3>
        </div>
        <div className="note-div-a">
          {notesList.map((n) => (
            <div key={n.id} className="note-title">
              <b> {n.notes}</b>
              <div className="note-icon">
                <FontAwesomeIcon
                  onClick={() => {
                    setNoteModal(true);
                    setEditNoteId(n.id);
                  }}
                  icon={faPenToSquare}
                />
                <FontAwesomeIcon
                  onClick={() => deleteNote(n.id)}
                  icon={faTrash}
                  className="cancle"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {noteModal && (
        <div
          onClick={() => setNoteModal(false)}
          className="note_modal_outer_div"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="note_modal_outer_container"
          >
            <Note noteId={editNoteId} />
          </div>
        </div>
      )}

      {playListModal && (
        <div
          onClick={() => setPlayListModal(false)}
          className="note_modal_outer_div"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="note_modal_outer_container"
          >
            <PlayListModal />
          </div>
        </div>
      )}

      <div className="more-videos">
        <p>
          <b> More Videos </b>
        </p>
        {videos.map(({ _id, title, thumbnail, creator }) => (
          <NavLink key={_id} className="navLink" to={`/categories/${_id}`}>
            <div className="more-video">
              <img src={thumbnail} alt="more videos" />
              <div className="more-video-details">
                <span> {title} </span> <span> {creator} </span>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
