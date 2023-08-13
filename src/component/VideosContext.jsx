import { createContext, useState, useEffect } from "react";
import { addWatchLater, removeWatchLater } from "../data/toast";

export const VideoContext = createContext();

const getDataFromLocalStorage = (key) => {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const noteListFromLocalStorage = getDataFromLocalStorage("notes");
const watchLaterFromLocalStorage = getDataFromLocalStorage("watchLater");
const playListFromLocalStorage = getDataFromLocalStorage("playlist");

export const VideoPrivoder = ({ children }) => {
  const [isWatchLater, setIsWatchLater] = useState(watchLaterFromLocalStorage);
  const [notesList, setNotesList] = useState(noteListFromLocalStorage);
  const [playListData, setPlayListData] = useState(playListFromLocalStorage);
  const [playListModal, setPlayListModal] = useState(false);
  const [noteModal, setNoteModal] = useState(false);
  const [editNoteId, setEditNoteId] = useState(null);

  const handleWatchLater = (item) => {
    setIsWatchLater((previ) => [...previ, item]);
    addWatchLater();
  };

  const inWatchList = (id) => isWatchLater.some((video) => video._id === id);

  const removeFromWatchLater = (clickedVideo) => {
    const filterWatchLater = isWatchLater.filter(
      ({ _id }) => _id !== clickedVideo
    );
    setIsWatchLater(filterWatchLater);
    removeWatchLater();
  };

  const values = {
    handleWatchLater,
    isWatchLater,
    removeFromWatchLater,
    inWatchList,
    notesList,
    setNotesList,
    noteModal,
    setNoteModal,
    playListModal,
    setPlayListModal,
    playListData,
    setPlayListData,
    editNoteId,
    setEditNoteId,
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notesList));
    localStorage.setItem("watchLater", JSON.stringify(isWatchLater));
    localStorage.setItem("playlist", JSON.stringify(playListData));
  }, [notesList, isWatchLater, playListData]);

  return (
    <>
      <VideoContext.Provider value={values}> {children} </VideoContext.Provider>{" "}
    </>
  );
};
