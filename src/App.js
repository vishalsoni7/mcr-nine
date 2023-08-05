import "./App.css";

import { Toaster } from "react-hot-toast";
import { AllRoutes } from "./pages/Routes";

function App() {
  return (
    <div className="App">
      <Toaster position="bottom-right" reverseOrder={false} />
      <AllRoutes />
    </div>
  );
}

export default App;
