import { useState } from "react";
import { useContext } from "react";
import { VideoContext } from "../component/VideosContext";

import "../css/explore.css";
import { SideBar } from "./SideBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const Explore = () => {
  const [searchVideo, setSearchVideo] = useState([]);
  const { isAllVideos } = useContext(VideoContext);

  const handleVideos = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const filterVideos = isAllVideos.filter(({ title }) =>
      title.toLowerCase().includes(inputValue)
    );
    setSearchVideo(inputValue === "" ? isAllVideos : filterVideos);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-around",
      }}
    >
      <SideBar />
      <div className="explore-main-div">
        <h1> Explore </h1>
        <input
          placeholder="Search video by title"
          type="text"
          onChange={handleVideos}
        />
        <div className="explore-inner-div-a">
          {searchVideo?.map(
            ({ _id, title, views, thumbnail, creator, category }) => (
              <div key={_id} className="explore-inner-div-b">
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <img className="explore-inner-div-b-img" src={thumbnail} />{" "}
                  <FontAwesomeIcon
                    icon={faClock}
                    style={{
                      marginLeft: "-2rem",
                      height: "2rem",
                      backgroundColor: "whitesmoke",
                      borderRadius: "0px 0px 0px 10px",
                    }}
                  />
                </div>
                <div className="A">
                  <div>
                    <img
                      className="explore-about-img"
                      src="user.jpg"
                      alt="user"
                    />{" "}
                  </div>
                  <div>
                    {" "}
                    <p>
                      {" "}
                      <b> {title} </b>
                    </p>{" "}
                    <span>
                      {" "}
                      <b> {category}</b>{" "}
                    </span>
                    <br />
                    <span className="span">
                      {" "}
                      <b>{views} </b> Views
                    </span>{" "}
                    |{" "}
                    <span className="span">
                      <b>{creator}</b>{" "}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
