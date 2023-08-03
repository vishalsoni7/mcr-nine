import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { VideoContext } from "../component/VideosContext";
import { videos } from "../data/video";

import {
  playListCreate,
  deletedPlayList,
  addedPlayList,
  fillInput,
} from "../data/toast";
import "../css/note.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faXmark } from "@fortawesome/free-solid-svg-icons";

export const PlayListModal = () => {
  const { playListData, setPlayListData, setPlayListModal } =
    useContext(VideoContext);

  const { videoId } = useParams();

  const [playListInput, setPlayListInput] = useState({
    name: "",
    describtion: "",
    videos: [],
  });

  const addToPlayList = (selectedId) => {
    const selectedVideo = videos.find((video) => video._id === +videoId);
    const upadatedPlayListData = playListData.map((pL) => {
      if (pL.id === selectedId) {
        return { ...pL, videos: [...pL.videos, selectedVideo] };
      }
      return pL;
    });
    setPlayListData(upadatedPlayListData);
    addedPlayList();
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPlayListInput({ ...playListInput, [name]: value });
  };

  const createPlayList = (e) => {
    if (playListInput.name === "" || playListInput.describtion === "") {
      fillInput();
    } else {
      e.preventDefault();
      const newPlayList = {
        id: `${playListInput.describtion + playListInput.name} ${Date.now()}`,
        ...playListInput,
      };
      setPlayListData([...playListData, newPlayList]);
      setPlayListInput({ name: "", describtion: "", videos: [] });
      setPlayListModal(false);
      playListCreate();
    }
  };

  const deletePlayList = (id) => {
    const filterPlayList = playListData.filter((pL) => pL.id !== id);
    setPlayListData(filterPlayList);
    deletedPlayList();
  };

  const cancleIt = () => {
    setPlayListInput({ name: "", describtion: "" });
    setPlayListModal(false);
  };

  return (
    <div className="note-div">
      <span className="note-modal">
        {" "}
        <b>Add to Playlist </b>{" "}
        <FontAwesomeIcon className="cancle" onClick={cancleIt} icon={faBan} />
      </span>
      <input
        value={playListInput.name}
        onChange={handleInput}
        placeholder="Name Playlist"
        type="text"
        name="name"
      />
      <input
        value={playListInput.describtion}
        onChange={handleInput}
        placeholder="Description"
        type="text"
        name="describtion"
      />
      <button className="note-btn" onClick={(e) => createPlayList(e)}>
        {" "}
        Create New Playlist
      </button>

      <div style={{ width: "100%" }} className="playlist-list">
        {" "}
        {playListData.map(({ id, name }) => (
          <div className="playlist-list-div" key={id}>
            <p onClick={() => addToPlayList(id)}> {name} </p>
            <FontAwesomeIcon
              onClick={() => deletePlayList(id)}
              icon={faXmark}
              className="cancle"
            />
          </div>
        ))}{" "}
      </div>
    </div>
  );
};
