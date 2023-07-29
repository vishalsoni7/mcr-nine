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
    setIsWatchLater((isWatchLater) => [...isWatchLater, item]);
  };

  const inWatchList = isWatchLater.find((video) => video._id);

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

  useEffect(() => {}, [isWatchLater]);

  return (
    <>
      <VideoContext.Provider value={values}> {children} </VideoContext.Provider>{" "}
    </>
  );
};
