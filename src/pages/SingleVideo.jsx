import { useContext } from "react";
import { useParams } from "react-router-dom";
import { VideoContext } from "../component/VideosContext";
import { SideBar } from "./SideBar";

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
import { Note } from "./Note";

export const SingleVideo = () => {
  const {
    noteModal,
    setNoteModal,
    notesList,
    isAllVideos,
    inWatchList,
    removeFromWatchLater,
    handleWatchLater,
    deleteNote,
  } = useContext(VideoContext);
  const { videoId } = useParams();

  const findVideo = isAllVideos.find(({ _id }) => +_id === +videoId);

  return (
    <div className="singlevideo-main-div">
      <SideBar />

      <div className="i-frame-div">
        <iframe className="i-frame" src={findVideo?.src}></iframe>
        <div className="single-video-title">
          <h3>
            <b> {findVideo?.title} </b>
          </h3>
          <div className="single-video-icon">
            {" "}
            <FontAwesomeIcon
              onClick={() => {
                inWatchList(findVideo?._id)
                  ? removeFromWatchLater(findVideo?._id)
                  : handleWatchLater(findVideo);
              }}
              icon={faClock}
              className="icon"
            />{" "}
            <FontAwesomeIcon icon={faBars} className="icon" />
            <FontAwesomeIcon
              onClick={() => setNoteModal(true)}
              icon={faListCheck}
              className="icon"
            />{" "}
          </div>{" "}
        </div>{" "}
        {noteModal && (
          <div
            onClick={() => setNoteModal(false)}
            className="note_modal_outer_div"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="note_modal_outer_container"
            >
              <Note />
            </div>
          </div>
        )}
        <div>
          {" "}
          <h3> My Notes </h3>{" "}
        </div>
        <div className="note-div-a">
          {notesList.map((note, index) => (
            <div key={index} className="note-title">
              {" "}
              <b>
                {" "}
                <li> {note} </li>{" "}
              </b>
              <div className="note-icon">
                {" "}
                <FontAwesomeIcon
                  onClick={() => setNoteModal(true)}
                  icon={faPenToSquare}
                />
                <FontAwesomeIcon
                  onClick={() => deleteNote(index)}
                  icon={faTrash}
                />{" "}
              </div>
            </div>
          ))}{" "}
        </div>
      </div>

      <div className="more-videos">
        <p>
          <b> More Videos </b>
        </p>
        {isAllVideos.map(({ _id, title, thumbnail, creator }) => (
          <div className="more-video" key={_id}>
            <img src={thumbnail} alt="more videos" />
            <div className="more-video-details">
              <span> {title} </span> <span> {creator} </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
