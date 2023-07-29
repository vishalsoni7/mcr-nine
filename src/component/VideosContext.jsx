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
    console.log(isWatchLater);
  };

  const inWatchList = ({ _id }) =>
    isWatchLater.find((item) => item._id === _id);

  const removeFromWatchLater = ({ _id }) => {
    const filterWatchLater = isWatchLater.filter((video) => video._id !== _id);
    console.log(filterWatchLater);
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

  return (
    <>
      <VideoContext.Provider value={values}> {children} </VideoContext.Provider>{" "}
    </>
  );
};
