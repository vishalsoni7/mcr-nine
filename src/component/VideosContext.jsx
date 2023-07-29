import { createContext, useState, useEffect } from "react";

import { categories } from "../data/categories";
import { videos } from "../data/video";

export const VideoContext = createContext();

export const VideoPrivoder = ({ children }) => {
  const [categorie, setCategories] = useState(categories);
  const [isAllVideos, setIsAllVideos] = useState(videos);
  const [isPlayList, setIsPlayList] = useState([]);
  const [isWatchLater, setIsWatchLater] = useState([]);

  const handleWatchLater = (item) => {
    setIsWatchLater((previ) => [...previ, item]);
  };

  const inWatchList = (id) => isWatchLater.some((video) => video._id === id);

  const removeFromWatchLater = (clickedVideo) => {
    const filterWatchLater = isWatchLater.filter(
      ({ _id }) => _id !== clickedVideo
    );
    setIsWatchLater(filterWatchLater);
  };

  const values = {
    categorie,
    isAllVideos,
    handleWatchLater,
    isWatchLater,
    removeFromWatchLater,
    inWatchList,
  };

  useEffect(() => {
    console.log(isWatchLater);
  }, [isWatchLater]);

  return (
    <>
      <VideoContext.Provider value={values}> {children} </VideoContext.Provider>{" "}
    </>
  );
};
