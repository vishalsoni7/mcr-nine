import { createContext, useState, useEffect } from "react";

import { categories } from "../data/categories";
import { videos } from "../data/video";

export const VideoContext = createContext();

const getDataFromLocalStorage = (key) => {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const notesLists = getDataFromLocalStorage("notes");
const isWatchLaters = getDataFromLocalStorage("watchLater");

export const VideoPrivoder = ({ children }) => {
  const [categorie, setCategories] = useState(categories);
  const [isAllVideos, setIsAllVideos] = useState(videos);
  const [isWatchLater, setIsWatchLater] = useState(isWatchLaters);
  const [notes, setNotes] = useState("");
  const [notesList, setNotesList] = useState(notesLists);
  const [noteModal, setNoteModal] = useState(false);

  const handleWatchLater = (item) => {
    setIsWatchLater((previ) => [...previ, item]);
    alert("added in watch later");
  };

  const inWatchList = (id) => isWatchLater.some((video) => video._id === id);

  const removeFromWatchLater = (clickedVideo) => {
    const filterWatchLater = isWatchLater.filter(
      ({ _id }) => _id !== clickedVideo
    );
    setIsWatchLater(filterWatchLater);
    alert("Removed from watch later");
  };

  const addNotes = () => {
    notes.trim()
      ? setNotesList((notesList) => [...notesList, notes])
      : setNotesList(notesList);
    setNotes("");
  };

  const deleteNote = (index) => {
    const filterNotes = notesList.filter((_, noteIndex) => noteIndex !== index);
    setNotesList(filterNotes);
  };

  const values = {
    categorie,
    isAllVideos,
    handleWatchLater,
    isWatchLater,
    removeFromWatchLater,
    inWatchList,
    addNotes,
    setNotes,
    notesList,
    noteModal,
    setNoteModal,
    deleteNote,
    notes,
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notesList));
    localStorage.setItem("watchLater", JSON.stringify(isWatchLater));
  }, [notesList, isWatchLater]);

  return (
    <>
      <VideoContext.Provider value={values}> {children} </VideoContext.Provider>{" "}
    </>
  );
};
