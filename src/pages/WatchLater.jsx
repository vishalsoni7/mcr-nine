import { useContext } from "react";
import { VideoContext } from "../component/VideosContext";
import { SideBar } from "./SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const WatchLater = () => {
  const { isWatchLater, inWatchList, removeFromWatchLater, handleWatchLater } =
    useContext(VideoContext);

  return (
    <div className="div">
      <SideBar />
      <div className="explore-main-div">
        <h1> Watch Later </h1>

        <div className="explore-inner-div-a">
          {!isWatchLater?.length && (
            <p>
              {" "}
              <b> Nothing in Watch later </b>{" "}
            </p>
          )}

          {isWatchLater?.map((video) => {
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
