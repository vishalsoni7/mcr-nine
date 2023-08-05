import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SideBar } from "./SideBar";
import { PlayListModal } from "./PlayListModal";
import { VideoContext } from "../component/VideosContext";

import "../css/playlist.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusMinus } from "@fortawesome/free-solid-svg-icons";

export const PlayList = () => {
  const { playListData, playListModal, setPlayListModal } =
    useContext(VideoContext);

  return (
    <div className="div">
      <SideBar />

      <div className="explore-main-div">
        <h1>All Playlists </h1>

        <div className="pl">
          {playListData.map((playlist) => (
            <NavLink
              to={`/singleplaylist/${playlist.id}`}
              key={playlist.id}
              className="navLink"
            >
              <div className="playlist-inner-div-a">
                <img src="music.svg" alt="playlist" />
                <p>
                  <b>
                    {playlist.name} <br /> {playlist.describtion}{" "}
                  </b>
                </p>
              </div>
            </NavLink>
          ))}
          {!playListData.length && (
            <span style={{ color: "GrayText" }}>
              {" "}
              <b> Click to Create playlist </b>{" "}
            </span>
          )}
          <FontAwesomeIcon
            onClick={() => setPlayListModal(true)}
            icon={faPlusMinus}
            className="cancle"
          />
        </div>
      </div>
      {playListModal && (
        <div
          onClick={() => setPlayListModal(false)}
          className="note_modal_outer_div"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="note_modal_outer_container"
          >
            <PlayListModal addPlaylist />
          </div>
        </div>
      )}
    </div>
  );
};
