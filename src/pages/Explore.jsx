import { useState } from "react";
import { useContext } from "react";
import { VideoContext } from "../component/VideosContext";

import "../css/explore.css";
import { SideBar } from "./SideBar";

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
                <div>
                  <img className="explore-inner-div-b-img" src={thumbnail} />
                </div>

                <div className="explore-about">
                  <img className="explore-about-img" src="user.jpg" />
                  <p>
                    <b> {title} </b>
                  </p>
                  <span>
                    <b> {category} </b>
                  </span>
                  <span className="span"> {views} |</span>
                  <span className="span"> {creator} </span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
