import { useContext } from "react";
import { useParams } from "react-router-dom";
import { VideoContext } from "../component/VideosContext";
import { SideBar } from "./SideBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const SingleVideo = () => {
  const { isAllVideos, inWatchList, removeFromWatchLater, handleWatchLater } =
    useContext(VideoContext);
  const { videoId } = useParams();

  const findVideo = isAllVideos.find(({ _id }) => +_id === +videoId);

  return (
    <div
      style={{
        display: "flex",
        alignContent: "flex-start",
        justifyContent: "space-evenly",
      }}
    >
      <SideBar />

      <div>
        <iframe width="750" height="400" src={findVideo?.src}></iframe>{" "}
        <p>
          {" "}
          <b> {findVideo?.title} </b>{" "}
        </p>
        <FontAwesomeIcon
          onClick={() => {
            inWatchList
              ? removeFromWatchLater(findVideo?._id)
              : handleWatchLater(findVideo);
          }}
          icon={faClock}
          style={{
            marginLeft: "-2rem",
            height: "2rem",
            backgroundColor: "whitesmoke",
            borderRadius: "0px 0px 0px 10px",
            cursor: "pointer",
          }}
        />
      </div>
      <div>
        {" "}
        <p>
          <b>More Videos:</b>{" "}
        </p>{" "}
        {isAllVideos.map(({ _id, title, thumbnail, creator }) => (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              margin: "1rem",
            }}
            key={_id}
          >
            {" "}
            <img
              style={{ height: "10rem", width: "15rem" }}
              src={thumbnail}
              alt="more videos"
            />{" "}
            <p>
              <b>
                {" "}
                {title} <br /> {creator}
              </b>{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
