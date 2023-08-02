import { useContext } from "react";
import { VideoContext } from "../component/VideosContext";
import { SideBar } from "./SideBar";

import "../css/playlist.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusMinus } from "@fortawesome/free-solid-svg-icons";
import { PlayListModal } from "./PlayListModal";

export const PlayList = () => {
  const { playListData, playListModal, setPlayListModal } =
    useContext(VideoContext);
  return (
    <div className="div">
      <SideBar />

      <div className="playlist">
        <h1> Playlists </h1>

        <div className="pl">
          {playListData.map((playlist) => (
            <div className="playlist-inner-div-a">
              <img src="music.svg" alt="playlist" />
              <p>
                <b>
                  {playlist.name} <br /> {playlist.describtion}{" "}
                </b>
              </p>
            </div>
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
