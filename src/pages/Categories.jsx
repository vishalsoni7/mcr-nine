import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { VideoContext } from "../component/VideosContext";
import { SideBar } from "./SideBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { videos } from "../data/video";

export const Category = () => {
  const { handleWatchLater, inWatchList, removeFromWatchLater } =
    useContext(VideoContext);
  const { categories } = useParams();

  const filterCategories = videos.filter(
    ({ category }) => category === categories
  );

  return (
    <div className="div">
      <SideBar />
      <div className="b">
        <h1> {categories} </h1>
        <div className="explore-inner-div-a">
          {filterCategories?.map((video) => {
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
