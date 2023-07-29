import { useContext } from "react";
import { VideoContext } from "../component/VideosContext";
import { SideBar } from "./SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const WatchLater = () => {
  const { isWatchLater, inWatchList, removeFromWatchLater, handleWatchLater } =
    useContext(VideoContext);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
      <SideBar />
      <div className="explore-main-div">
        <h1> Watch Later </h1>

        {isWatchLater.length ? (
          <div className="explore-inner-div-a">
            {isWatchLater?.map((video) => {
              const { _id, title, views, thumbnail, creator, category } = video;
              return (
                <div key={_id} className="explore-inner-div-b">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    <img className="explore-inner-div-b-img" src={thumbnail} />

                    <FontAwesomeIcon
                      onClick={() => {
                        inWatchList
                          ? removeFromWatchLater(_id)
                          : handleWatchLater(video);
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
        ) : (
          <h2> Nothing In Watch Later </h2>
        )}
      </div>
    </div>
  );
};
