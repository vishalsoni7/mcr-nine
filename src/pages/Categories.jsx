import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { VideoContext } from "../component/VideosContext";
import { SideBar } from "./SideBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const Category = () => {
  const { isAllVideos, handleWatchLater } = useContext(VideoContext);
  const { categories } = useParams();

  const filterCategories = isAllVideos.filter(
    ({ category }) => category === categories
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-around",
      }}
    >
      <SideBar />
      <div className="explore-main-div">
        <h1 style={{ textAlign: "left" }}> {categories} </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {filterCategories?.map((video) => {
            const { _id, title, views, thumbnail, creator, category } = video;

            return (
              <div key={_id} className="explore-inner-div-b">
                <NavLink to={`/categories/${_id}`} className="navLink">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    <img className="explore-inner-div-b-img" src={thumbnail} />
                    <FontAwesomeIcon
                      onClick={() => handleWatchLater(video)}
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
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
