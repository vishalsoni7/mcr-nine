import { useContext } from "react";
import { VideoContext } from "../component/VideosContext";
import { SideBar } from "./SideBar";
import { PlayListModal } from "./PlayListModal";

import "../css/playlist.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusMinus } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

export const PlayList = () => {
  const { playListData, playListModal, setPlayListModal } =
    useContext(VideoContext);

  return (
    <div className="div">
      <SideBar />

      <div className="explore-main-div">
        <h1> Playlists </h1>

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
            <PlayListModal />
          </div>
        </div>
      )}
    </div>
  );
};
