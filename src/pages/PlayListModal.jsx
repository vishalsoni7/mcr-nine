import { useContext, useState } from "react";
import { VideoContext } from "../component/VideosContext";
import "../css/note.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faTrash } from "@fortawesome/free-solid-svg-icons";

export const PlayListModal = () => {
  const { playListData, setPlayListData, setPlayListModal } =
    useContext(VideoContext);

  const [playListInput, setPlayListInput] = useState({
    name: "",
    describtion: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPlayListInput({ ...playListInput, [name]: value });
  };

  const addToPlayList = (e) => {
    if (playListInput.name === "" || playListInput.describtion === "") {
      alert("Please fill inputs.");
    } else {
      e.preventDefault();
      const newPlayList = {
        id: ` ${playListInput.describtion + playListInput.name} ${Date.now()}`,
        ...playListInput,
      };
      setPlayListData([...playListData, newPlayList]);
      setPlayListInput({ name: "", describtion: "" });
      setPlayListModal(false);
    }
  };

  const deletePlayList = (id) => {
    const filterPlayList = playListData.filter((pL) => pL.id !== id);
    setPlayListData(filterPlayList);
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
      <button className="note-btn" onClick={addToPlayList}>
        {" "}
        Create New Playlist
      </button>

      <div style={{ width: "100%" }} className="playlist-list">
        {" "}
        {playListData.map(({ id, name }) => (
          <div className="playlist-list-div" key={id}>
            <p> {name} </p>
            <FontAwesomeIcon
              onClick={() => deletePlayList(id)}
              icon={faTrash}
            />{" "}
          </div>
        ))}{" "}
      </div>
    </div>
  );
};
