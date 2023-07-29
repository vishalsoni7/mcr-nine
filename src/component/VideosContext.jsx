import { useEffect } from "react";
import { createContext, useState } from "react";

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

  const values = { categorie, isAllVideos, handleWatchLater, isWatchLater };

  return (
    <>
      <VideoContext.Provider value={values}> {children} </VideoContext.Provider>{" "}
    </>
  );
};
