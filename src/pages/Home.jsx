import { useContext } from "react";
import { VideoContext } from "../component/VideosContext";

import "../css/home.css";

export const Home = () => {
  const { categorie } = useContext(VideoContext);

  return (
    <div>
      <h2 className="h1"> Categories </h2>
      <div className="home">
        {categorie.map(({ _id, thumbnail, category }) => (
          <div key={_id}>
            {" "}
            <img src={thumbnail} alt={category} />{" "}
            <p>
              {" "}
              <b>{category} </b>{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
