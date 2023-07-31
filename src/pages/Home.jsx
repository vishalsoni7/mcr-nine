import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { VideoContext } from "../component/VideosContext";

import "../css/home.css";
import { SideBar } from "./SideBar";

export const Home = () => {
  const { categorie } = useContext(VideoContext);

  return (
    <div className="div">
      <SideBar />
      <div className="b">
        <h1> Categories </h1>{" "}
        <div className="c">
          {categorie?.map(({ _id, thumbnail, category }) => (
            <div key={_id}>
              <NavLink className="navLink" to={`/category/${category}`}>
                <img src={thumbnail} alt={category} />
                <p>
                  <b>{category} </b>
                </p>
              </NavLink>
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};
