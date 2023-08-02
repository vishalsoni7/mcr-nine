import { useState } from "react";
import { useContext } from "react";
import { VideoContext } from "../component/VideosContext";

import { videos } from "../data/video";

import "../css/explore.css";
import { SideBar } from "./SideBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const Explore = () => {
  const { handleWatchLater, inWatchList, removeFromWatchLater } =
    useContext(VideoContext);

  const [searchVideo, setSearchVideo] = useState(videos);

  const handleVideos = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const filterVideos = videos.filter(({ title }) =>
      title.toLowerCase().includes(inputValue)
    );
    setSearchVideo(inputValue === "" ? videos : filterVideos);
  };

  return (
    <div className="div">
      <SideBar />
      <div className="explore-main-div">
        <h1> Explore </h1>
        <input
          placeholder="Search video by title"
          type="text"
          onChange={handleVideos}
        />
        <div className="explore-inner-div-a">
          {searchVideo?.map((video) => {
            const { _id, title, views, thumbnail, creator, category } = video;
            return (
              <div key={_id} className="explore-inner-div-b">
                <div className="category-A">
                  <img className="explore-inner-div-b-img" src={thumbnail} />

                  <FontAwesomeIcon
                    onClick={() => {
                      inWatchList(_id)
                        ? removeFromWatchLater(_id)
                        : handleWatchLater(video);
                    }}
                    icon={faClock}
                    className="category-Icon"
                  />
                </div>
                <div className="A">
                  <div>
                    <img
                      className="explore-about-img"
                      src="user.jpg"
                      alt="user"
                    />
                  </div>
                  <div>
                    <p>
                      <b>{title}</b>
                    </p>{" "}
                    <span>
                      <b>{category}</b>{" "}
                    </span>
                    <br />
                    <span className="span">
                      <b>{views}</b> Views
                    </span>{" "}
                    |{" "}
                    <span className="span">
                      <b>{creator}</b>{" "}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
