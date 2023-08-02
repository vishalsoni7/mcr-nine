import { NavLink } from "react-router-dom";

import { categories } from "../data/categories";

import "../css/home.css";
import { SideBar } from "./SideBar";

export const Home = () => {
  return (
    <div className="div">
      <SideBar />
      <div className="b">
        <h1> Categories </h1>{" "}
        <div className="c">
          {categories?.map(({ _id, thumbnail, category }) => (
            <div className="for-box" key={_id}>
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
