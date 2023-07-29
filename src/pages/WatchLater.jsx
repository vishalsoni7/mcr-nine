import { useContext } from "react";
import { VideoContext } from "../component/VideosContext";

export const WatchLater = () => {
  const { isWatchLater } = useContext(VideoContext);
  console.log(isWatchLater);
  return (
    <div>
      <h1> Watch Later </h1>
    </div>
  );
};
