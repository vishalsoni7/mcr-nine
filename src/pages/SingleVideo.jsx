import { useContext } from "react";
import { useParams } from "react-router-dom";
import { VideoContext } from "../component/VideosContext";
import { SideBar } from "./SideBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBars,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <p>
            {" "}
            <b> {findVideo?.title} </b>{" "}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              gap: "1rem",
            }}
          >
            {" "}
            <FontAwesomeIcon
              onClick={() => {
                inWatchList(findVideo?._id)
                  ? removeFromWatchLater(findVideo?._id)
                  : handleWatchLater(findVideo);
              }}
              icon={faClock}
              className="icon"
            />{" "}
            <FontAwesomeIcon icon={faBars} className="icon" />
            <FontAwesomeIcon icon={faListCheck} className="icon" />{" "}
          </div>
        </div>
        <hr />
      </div>
      <div>
        {" "}
        <p style={{ textAlign: "left", marginLeft: "1rem" }}>
          <b>More Videos:</b>{" "}
        </p>{" "}
        {isAllVideos.map(({ _id, title, thumbnail, creator }) => (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              margin: "1rem",
              gap: "1rem",
            }}
            key={_id}
          >
            {" "}
            <img
              style={{ height: "10rem", width: "12rem" }}
              src={thumbnail}
              alt="more videos"
            />{" "}
            <p style={{ textAlign: "left" }}>
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
