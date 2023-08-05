import { Route, Routes } from "react-router-dom";
import { Category } from "./Categories";
import { Explore } from "./Explore";

import { Home } from "./Home";
import { PlayList } from "./PlayList";
import { SinglePlayList } from "./SinglePlayList";
import { SingleVideo } from "./SingleVideo";
import { WatchLater } from "./WatchLater";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/category/:categories" element={<Category />} />
        <Route path="/categories/:videoId" element={<SingleVideo />} />
        <Route
          path="/singleplaylist/:playListId"
          element={<SinglePlayList />}
        />
      </Routes>
    </>
  );
};
