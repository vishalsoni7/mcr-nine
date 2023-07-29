import { useContext } from "react";
import { useParams } from "react-router-dom";
import { VideoContext } from "../component/VideosContext";

export const SingleVideo = () => {
  const { isAllVideos } = useContext(VideoContext);
  const videoId = useParams();

  const findVideo = isAllVideos.find(({ _id }) => +_id === +videoId);

  console.log(findVideo);

  return <div> </div>;
};
