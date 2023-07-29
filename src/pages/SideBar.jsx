import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCompass,
  faClock,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="sideBar">
      <NavLink to="/" className="navLink">
        <h3>
          <FontAwesomeIcon icon={faHouse} /> Home
        </h3>{" "}
      </NavLink>
      <NavLink to="/explore" className="navLink">
        {" "}
        <h3>
          <FontAwesomeIcon icon={faCompass} /> Explore
        </h3>
      </NavLink>
      <NavLink to="/watchlater" className="navLink">
        <h3>
          {" "}
          <FontAwesomeIcon icon={faClock} /> Watch Later
        </h3>{" "}
      </NavLink>
      <NavLink to="/playlist" className="navLink">
        <h3>
          <FontAwesomeIcon icon={faListCheck} /> PlayList
        </h3>{" "}
      </NavLink>
    </div>
  );
};
