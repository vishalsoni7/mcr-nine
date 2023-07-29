import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { VideoContext } from "../component/VideosContext";

import "../css/home.css";
import { SideBar } from "./SideBar";

export const Home = () => {
  const { categorie } = useContext(VideoContext);

  return (
    <>
      <h1> Categories </h1>
      <div className="home">
        {" "}
        <SideBar />{" "}
        <div className="show-category">
          {" "}
          {categorie?.map(({ _id, thumbnail, category }) => (
            <div key={_id}>
              <NavLink className="navLink" to={`/category/${category}`}>
                <img src={thumbnail} alt={category} />
                <p style={{ textAlign: "left" }}>
                  <b>{category} </b>
                </p>
              </NavLink>
            </div>
          ))}{" "}
        </div>
      </div>
    </>
  );
};

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "flex-start",
//           justifyContent: "space-evenly",
//         }}
//       >
//         {" "}
//         <SideBar />
//         <div>
//           <div className="home">
//             {categorie.map(({ _id, thumbnail, category }) => (
//               <div key={_id}>
//                 <NavLink className="navLink" to={`/category/${category}`}>
//                   <img src={thumbnail} alt={category} />{" "}
//                   <p>
//                     <b>{category} </b>{" "}
//                   </p>
//                 </NavLink>
//               </div>
//             ))}
//           </div>
//         </div>{" "}
//       </div>
//     </>
//   );
// };
