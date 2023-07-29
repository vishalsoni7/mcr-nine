import { useContext } from "react";
import { useParams } from "react-router-dom";
import { VideoContext } from "../component/VideosContext";
import { SideBar } from "./SideBar";

export const Category = () => {
  const { isAllVideos } = useContext(VideoContext);
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
          {" "}
          {filterCategories?.map(
            ({ _id, title, views, thumbnail, creator, category }) => (
              <div key={_id} className="explore-inner-div-b">
                <div>
                  <img src={thumbnail} />
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
          )}{" "}
        </div>
      </div>
    </div>
  );
};
