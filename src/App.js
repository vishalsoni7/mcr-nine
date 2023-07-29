import "./App.css";

import { Route, Routes } from "react-router-dom";
import { SideBar } from "./pages/SideBar";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { WatchLater } from "./pages/WatchLater";
import { PlayList } from "./pages/PlayList";
import { Category } from "./pages/Categories";
import { SingleVideo } from "./pages/SingleVideo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/category/:categories" element={<Category />} />
        <Route path="/categories/:videoId" element={<SingleVideo />} />
      </Routes>
    </div>
  );
}

export default App;
