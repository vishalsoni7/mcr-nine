import { useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { VideoContext } from "../component/VideosContext";
import { SideBar } from "./SideBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const SinglePlayList = () => {
  const { playListData, inWatchList, removeFromWatchLater, handleWatchLater } =
    useContext(VideoContext);
  const { playListId } = useParams();

  const allVideos =
    playListData.find((videoArr) => videoArr.id === playListId)?.videos || [];

  const getName =
    playListData.find((vi) => vi.id === playListId)?.name || "Unknown playlist";

  return (
    <div className="div">
      <SideBar />

      <div className="b">
        <h1> {getName} </h1>
        <div className="explore-inner-div-a">
          {!allVideos?.length && (
            <span style={{ color: "GrayText" }}>
              {" "}
              <b> Nothing in Playlist </b>{" "}
            </span>
          )}

          {allVideos?.map((video) => {
            const { _id, title, views, thumbnail, creator, category } = video;
            return (
              <div key={_id} className="explore-inner-div-b">
                <div className="category-A">
                  <img
                    className="explore-inner-div-b-img"
                    src={thumbnail}
                    alt="thubnail"
                  />

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
                      src="/user.jpg"
                      alt="user"
                    />
                  </div>
                  <div>
                    <NavLink to={`/categories/${_id}`} className="navLink">
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
                    </NavLink>
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
