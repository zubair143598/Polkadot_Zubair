import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./Components/Layout/Base";
import Home from "./Pages/Home";
import Technology from "./Pages/Technology";
import Community from "./Pages/Community";
function App() {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="home" element={<Home />} />
            <Route index path="technology" element={<Technology />} />
            <Route index path="community" element={<Community />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default App;
